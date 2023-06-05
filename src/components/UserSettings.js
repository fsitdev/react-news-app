import React, { useState, useEffect } from 'react'
import Select from './Select'
import { sources, categories } from '@/utils/constants'
import axios from '@/lib/axios'

const UserSettings = () => {
    const [selectedSources, setSelectedSources] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([])
    const [authors, setAuthors] = useState('')

    const handleAuthorChange = e => {
        setAuthors(e.target.value)
    }

    const handleSaveSettings = () => {
        axios
            .post('/api/settings', {
                sources: selectedSources.map(source => source.id).join(','),
                categories: selectedCategories
                    .map(category => category.id)
                    .join(','),
                authors: authors
                    .split(',')
                    .map(author => author.trim())
                    .join(','),
            })
            .then(res => {
                if (res.status === 200 && res.data) {
                    console.log(res.data)
                }
            })
    }

    useEffect(() => {
        axios.get('/api/settings').then(res => {
            if (res.status === 200 && res.data) {
                const {
                    sources: userSources,
                    categories: userCategories,
                    authors: userAuthors,
                } = res.data
                if (userSources) {
                    setSelectedSources(
                        userSources
                            .split(',')
                            .map(id =>
                                sources.find(source => source.id === id),
                            ),
                    )
                }
                if (userCategories) {
                    setSelectedCategories(
                        userCategories
                            .split(',')
                            .map(id =>
                                categories.find(category => category.id === id),
                            ),
                    )
                }
                if (userAuthors) {
                    setAuthors(userAuthors)
                }
            }
        })
    }, [])

    return (
        <div className="w-full h-auto">
            <div className="flex justify-between items-center mb-4">
                <h2>Preferred Sources</h2>
                <div className="w-9/12">
                    <Select
                        items={sources}
                        onChange={setSelectedSources}
                        multiple
                        selectedItems={selectedSources}
                    />
                </div>
            </div>
            <div className="flex justify-between items-center mb-4">
                <h2>Preferred Categories</h2>
                <div className="w-9/12">
                    <Select
                        items={categories}
                        onChange={setSelectedCategories}
                        multiple
                        selectedItems={selectedCategories}
                    />
                </div>
            </div>
            <div className="flex justify-between items-center mb-4">
                <h2>Preferred Authors</h2>
                <div className="w-9/12">
                    <input
                        type="text"
                        value={authors}
                        onChange={handleAuthorChange}
                        className="relative w-full rounded-lg bg-white py-2 pl-3 pr-10 shadow-md focus:shadow-md focus:outline-none border-0 focus:border-0 sm:text-sm"
                    />
                </div>
            </div>
            <div className="flex justify-end">
                <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    onClick={handleSaveSettings}>
                    Save Settings
                </button>
            </div>
        </div>
    )
}

export default UserSettings
