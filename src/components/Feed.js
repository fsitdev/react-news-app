import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../reducers/newsReducer'
import NewsItem from './NewsItem'

const Feed = () => {
    const dispatch = useDispatch()
    const newsData = useSelector(state => state.news.data)
    const loading = useSelector(state => state.news.loading)
    const error = useSelector(state => state.news.error)

    useEffect(() => {
        dispatch(fetchNews())
    }, [dispatch])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <div>
            {newsData.map((item, index) => <NewsItem key={index} {...item} />)}
        </div>
    )
}

export default Feed
