import React from 'react'

export default function ProductDetail() {
    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg text-center center m-auto">
            <img class="w-full" src="src\pages\Nitro_Wallpaper_5000x2813.jpg" alt="room img" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2"> Product Name </div>{' '}
                <p class="text-gray-700 text-base"> quantity </p> <p class="text-gray-700 text-base"> star rating </p>{' '}
                <p class="text-gray-700 text-base"> price </p>{' '}
            </div>{' '}
            <div class="px-6 pt-4 pb-5 flex-row text-center">
                <button class="bg-green-700 hover:bg-green-300 text-white font-bold py-2 px-4 rounded-full w-1/3">
                    {' '}
                    Edit{' '}
                </button>{' '}
                <button class="bg-red-700 hover:bg-red-300 text-white font-bold py-2 px-4 rounded-full w-1/3">
                    Delete{' '}
                </button>{' '}
            </div>{' '}
        </div>
    )
}
