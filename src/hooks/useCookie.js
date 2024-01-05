// import packages
import Cookie from "js-cookie"

const useCookie = () => {
    //function to store cookie
    const setCookie = (name, value) => {
        Cookie.set(name, JSON.stringify(value), {
            expires: 1
        })
    }

    // funtion to retrieve cookie
    const getCookie = (name) => {
        return Cookie.get(name)
    }

    // function to delete cookie
    const removeCookie = (name) => {
        Cookie.remove(name)
    }

    return { setCookie, getCookie, removeCookie }
}

export { useCookie }