import React from 'react'
import { Provider } from 'react-redux'
import store from '@/store'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import UserSettings from '@/components/UserSettings'

const Dashboard = () => {
    return (
        <Provider store={store}>
            <AppLayout
                header={
                    <div className="flex justify-between items-center">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Settings
                        </h2>
                    </div>
                }>
                <Head>
                    <title>Laravel - Dashboard</title>
                </Head>

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <UserSettings />
                    </div>
                </div>
            </AppLayout>
        </Provider>
    )
}

export default Dashboard
