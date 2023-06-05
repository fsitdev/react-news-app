import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchNews } from '@/reducers/newsReducer'
import SearchFilter from './SearchFilter'
import { parseDate } from '@/utils/date'

const SearchBar = () => {
    const dispatch = useDispatch()
    const [showSidebar, setShowSidebar] = useState(false)
    const [search, setSearch] = useState('')
    const [dateRange, setDateRange] = useState([null, null])
    const [category, setCategory] = useState(null)
    const [source, setSource] = useState(null)

    const handleToggleSidebar = () => {
        setShowSidebar(!showSidebar)
    }

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            performSearch()
        }
    }

    const performSearch = () => {
        setShowSidebar(false)
        dispatch(
            fetchNews({
                search,
                dateFrom: parseDate(dateRange[0]),
                dateTo: parseDate(dateRange[1]),
                category: category?.id,
                source: source?.id,
                type: 'search',
            }),
        )
    }

    return (
        <div className="flex items-center space-x-4">
            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className="rounded-lg bg-white py-2 pl-3 pr-10 w-auto shadow-md focus:shadow-md w-1/2 focus:outline-none border-0 focus:border-0 sm:text-sm"
            />
            <button
                onClick={handleToggleSidebar}
                className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 w-1/2 sm:w-[160px]">
                Custom Filter
            </button>
            {showSidebar && (
                <div className="absolute right-0 mt-72 p-4 bg-white border border-gray-300 rounded-md shadow">
                    <SearchFilter
                        performSearch={performSearch}
                        source={source}
                        category={category}
                        dateRange={dateRange}
                        setDateRange={setDateRange}
                        setSource={setSource}
                        setCategory={setCategory}
                    />
                </div>
            )}
        </div>
    )
}

export default SearchBar
