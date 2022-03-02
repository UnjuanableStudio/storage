export default {
    get: (key) => {
        if (localStorage) {
            return localStorage.getItem(key)
        }
    },
    set: (key, value) => {
        if (localStorage) {
            localStorage.setItem(key, value)
        }
    },
    remove: (key) => {
        if (localStorage) {
            localStorage.removeItem(key)
        }
    },
    clear: () => {
        if (localStorage) {
            localStorage.clear()
        }
    }
}
