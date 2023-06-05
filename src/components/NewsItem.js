import React from 'react'

const NewsItem = ({ title, date, source, image, url }) => {
    const handleClick = () => {
        window.open(url, '_blank')
    }

    return (
        <div className="p-4 bg-white rounded-lg shadow-md flex sm:flex-row flex-col justify-start items-center mb-8">
            {image && (
                <div className='sm:pr-4 pb-4 flex items-center'>
                    <img
                        src={image}
                        alt="News Image"
                        className="mt-4 rounded-lg sm:w-[100px] w-full h-auto sm:max-h-16"
                    />
                </div>
            )}
            <div className="flex justify-between sm:flex-row flex-col w-full">
                <div>
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="text-gray-500">{date}</p>
                    <p className="text-gray-500">{source}</p>
                </div>
                <div className='min-w-[110px]'>
                    <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        onClick={handleClick}>
                        Read More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
