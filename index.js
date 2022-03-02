import {localStorage, uniapp} from './adaptor'

const defaultConfig = {
    expire_suffix: '_expiry',
    adaptor: 'localStorage'
}

export default class Storage {
    constructor(config) {
        this.config = Object.assign({}, defaultConfig, config)
        this._store = localStorage
        switch (this.config.adaptor) {
            case 'uniapp':
                this._store = uniapp
                break
            default:
                this._store = localStorage
        }
    }

    /**
     * 设置缓存
     * @param k
     * @param v
     * @param t
     */
    set(k, v, t) {
        this._store.set(k, v) // 记录数据值
        let seconds = parseInt(t)
        if (seconds > 0) {
            if (seconds <= 311040000) {
                const timestamp = Date.parse(new Date())
                seconds = timestamp / 1000 + seconds
            }
            this._store.set(k + this.config.expire_suffix, seconds + '')
        } else {
            this._store.remove(k + this.config.expire_suffix)
        }
    }

    /**
     * 获取缓存
     * @param k
     * @param def
     * @returns {string|boolean|*}
     */
    get(k, def) {
        const deadline = parseInt(this._store.get(k + this.config.expire_suffix))
        if (deadline) {
            if (deadline < Date.parse(new Date()) / 1000) {
                if (def) {
                    return def
                } else {
                    return false
                }
            }
        }
        const res = this._store.get(k)
        if (res) {
            return res
        }
        if (def === undefined || def === "") {
            def = false
        }
        return def
    }

    /**
     * 删除指定缓存
     * @param {Object} k
     */
    remove(k) {
        this._store.remove(k)
        this._store.remove(k + this.config.expire_suffix)
    }

    /**
     * 清理所有缓存
     * @return {[type]} [description]
     */
    clear() {
        this._store.clear()
    }
}
