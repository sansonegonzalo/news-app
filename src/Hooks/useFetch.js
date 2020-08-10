import { useState, useEffect } from 'react';


const useFetch = (url, initialState = [] ) => {
        
    const [data, setData] = useState(initialState)
    const [isFetching, setFetching] = useState(true)


    useEffect(() => {
        setFetching(true)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setFetching(false)
            })
            .catch(err => console.error(err))
    }, [url])

    return [
        data,
        isFetching
    ]

}

export default useFetch;