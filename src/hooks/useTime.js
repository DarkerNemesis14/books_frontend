const useTime = () => {
    // function to get present time in ISO format
    const timeISO = (refresh) => {
        return new Date().toISOString()
    }

    return { timeISO }
}

export { useTime }