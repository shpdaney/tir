export const generateId = () => (
    Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
);

export const getCurrentTime = () => {
    const date = new Date()
    const res = [date.getHours(), date.getMinutes()].map(v => v < 10 ? '0' + v : v).join(':')
    return res
    // return `${date.getHours()}:${date.getMinutes()}` 
}