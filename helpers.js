module.exports = {
    datetime: (date) => {
        const d = new Date(date).toISOString()
        const array = d.split('-')
        const year = array[0]
        const month = array[1]
        const dayAndTime = array[2]
        const time = dayAndTime.split('T')[1]
        const day = dayAndTime.split('T')[0]
        return `${day}, ${month}, ${year}
        `
    }
}