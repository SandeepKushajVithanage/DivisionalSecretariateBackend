export const getValue = async key => {
    const value = localStorage.getItem(key)
    if (value) return JSON.parse(value)
    else return
}

export const setValue = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
}

export const removeValue = key => {
    return localStorage.removeItem(key)
}

export const removeAllValues = () => {
    localStorage.clear()
}