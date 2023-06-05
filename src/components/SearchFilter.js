import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import Select from './Select'
import { sources, categories } from '@/utils/constants'
import 'react-datepicker/dist/react-datepicker.css'

const SearchFilter = ({
    source,
    category,
    dateRange,
    setDateRange,
    setCategory,
    setSource,
    performSearch,
}) => {
    const handleDateChange = dates => {
        setDateRange(dates)
    }

    const handleCategoryChange = e => {
        setCategory(e)
    }

    const handleSourceChange = e => {
        setSource(e)
    }

    const handleApplyFilters = () => {
        performSearch()
    }

    return (
        <div className="p-4">
            <h3 className="text-lg font-semibold mb-4">Custom Filters</h3>
            <div className="mb-4">
                <label className="block mb-2 font-medium">Date Range</label>
                <DatePicker
                    selected={dateRange[0]}
                    onChange={handleDateChange}
                    startDate={dateRange[0]}
                    endDate={dateRange[1]}
                    selectsRange
                    placeholderText="Select date range"
                    className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left border-0 !shadow-md focus:border-0 focus:shadow-none sm:text-sm"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-medium">Category</label>
                <Select
                    items={categories}
                    onChange={handleCategoryChange}
                    selectedItems={category}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-medium">Source</label>
                <Select
                    items={sources}
                    onChange={handleSourceChange}
                    selectedItems={source}
                />
            </div>
            <button
                onClick={handleApplyFilters}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Apply Filters
            </button>
        </div>
    )
}

export default SearchFilter
