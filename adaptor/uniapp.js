export default {
    get: (key) => {
        if (uni) {
            return uni.getStorageSync(key)
        }
    },
    set: (key, value) => {
        if (uni) {
            uni.setStorageSync(key, value)
        }
    },
    remove: (key) => {
        if (uni) {
            uni.removeStorageSync(key)
        }
    },
    clear: () => {
        if (uni) {
            uni.clearStorageSync()
        }
    }
}
