// import react hooks
import { useState } from "react"

// import custom hooks
import { useAuthContext } from "./useAuthContext"
import { useRefresh } from "./useRefresh"

const useBook = () => {
    // initiate variables
    const { refresh, error: refreshError } = useRefresh()
    const { user } = useAuthContext()

    const [books, setBooks] = useState(null)
    const [error, setError] = useState(null)

    const refreshToken = user.refresh

    // function to handle book list request
    const getBooks = async () => {
        // get access token
        const accessToken = await refresh(refreshToken)
        
        // check for errors
        if (refreshError) {
            return setError(refreshError)
        }

        // fetch book list
        const response = await fetch("get_books/", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        })

        // get json
        const json = await response.json()
        
        // check for errors
        if (response.ok) {
            setBooks(json)
        } else {
            setError("Could not fetch books.")
        }
    }

    // function to sort book list
    const sortBooks = (sortBy) => {
        // handle sort by publish year
        if (sortBy === "publish") {
            setBooks(books => books.sort((a, b) => {
                return parseInt(a.published_on) === parseInt(b.published_on)? 0 : parseInt(a.published_on) > parseInt(b.published_on)? -1 : 1
            }))
        }

        // handle sort by author birth year
        if (sortBy === "birth") {
            setBooks(books => books.sort((a, b) => {
                return parseInt(a.author_info.birth_year) === parseInt(b.author_info.birth_year)? 0 : parseInt(a.author_info.birth_year) > parseInt(b.author_info.birth_year)? -1 : 1
            }))
        }
    }

    return { getBooks, sortBooks, books, error }
}

export { useBook }