import React from 'react'
import { Provider } from 'react-redux'
import store from '@/store'
import Feed from '@/components/Feed'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import SearchBar from '@/components/Searchbar'

const Home = () => {
    return (
        <Provider store={store}>
            <AppLayout
                header={
                    <div className='flex justify-between items-center'>
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight hidden sm:block">
                            Home
                        </h2>
                        <SearchBar />
                    </div>
                }>
                <Head>
                    <title>Laravel - Home</title>
                </Head>

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow-sm rounded-lg sm:rounded-lg">
                            <Feed />
                        </div>
                    </div>
                </div>
            </AppLayout>
        </Provider>
    )
}

export default Home
