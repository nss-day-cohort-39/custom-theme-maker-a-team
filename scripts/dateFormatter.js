//convert date to YY/MM/DD format
export const formatDate = (timestamp) => {
    const dd = timestamp.getDate()
    const mm = timestamp.getMonth() + 1
    const yy = timestamp.getFullYear().toString().substr(-2);

    return `${yy}/${mm}/${dd}`
}