/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
const popularProducts = [
    {
        id: '3432',
        product_name: 'Macbook M1 Pro 14"',
        product_thumbnail: 'https://source.unsplash.com/100x100?macbook',
        product_price: '$1499.00',
        product_stock: 341
    },
    {
        id: '7633',
        product_name: 'Samsung Galaxy Buds 2',
        product_thumbnail: 'https://source.unsplash.com/100x100?earbuds',
        product_price: '$399.00',
        product_stock: 24
    },
    {
        id: '6534',
        product_name: 'Asus Zenbook Pro',
        product_thumbnail: 'https://source.unsplash.com/100x100?laptop',
        product_price: '$899.00',
        product_stock: 56
    },
    {
        id: '9234',
        product_name: 'LG Flex Canvas',
        product_thumbnail: 'https://source.unsplash.com/100x100?smartphone',
        product_price: '$499.00',
        product_stock: 98
    },
    {
        id: '4314',
        product_name: 'Apple Magic Touchpad',
        product_thumbnail: 'https://source.unsplash.com/100x100?touchpad',
        product_price: '$699.00',
        product_stock: 0
    },
    {
        id: '4342',
        product_name: 'Nothing Earbuds One',
        product_thumbnail: 'https://source.unsplash.com/100x100?earphone',
        product_price: '$399.00',
        product_stock: 453
    },
    {
        id: '3432',
        product_name: 'Macbook M1 Pro 14"',
        product_thumbnail: 'https://source.unsplash.com/100x100?macbook',
        product_price: '$1499.00',
        product_stock: 341
    },
    {
        id: '7633',
        product_name: 'Samsung Galaxy Buds 2',
        product_thumbnail: 'https://source.unsplash.com/100x100?earbuds',
        product_price: '$399.00',
        product_stock: 24
    },
    {
        id: '6534',
        product_name: 'Asus Zenbook Pro',
        product_thumbnail: 'https://source.unsplash.com/100x100?laptop',
        product_price: '$899.00',
        product_stock: 56
    },
    {
        id: '9234',
        product_name: 'LG Flex Canvas',
        product_thumbnail: 'https://source.unsplash.com/100x100?smartphone',
        product_price: '$499.00',
        product_stock: 98
    },
    {
        id: '4314',
        product_name: 'Apple Magic Touchpad',
        product_thumbnail: 'https://source.unsplash.com/100x100?touchpad',
        product_price: '$699.00',
        product_stock: 0
    },
    {
        id: '4342',
        product_name: 'Nothing Earbuds One',
        product_thumbnail: 'https://source.unsplash.com/100x100?earphone',
        product_price: '$399.00',
        product_stock: 453
    }
]
export default function Products() {
    return (
        <div>
            {' '}
            <Link to={'/products/create'}>
                {' '}
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
                    Add Product{' '}
                </button>{' '}
            </Link>{' '}
            <div className="mt-4 flex flex-row flex-wrap">
                {' '}
                {popularProducts.map((product) => (
                    <div class="w-full ml-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-9">
                        <a href="#">
                            <img class="p-8 rounded-t-lg" src="................................" alt="product image" />
                        </a>{' '}
                        {''}{' '}
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    {' '}
                                    Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport{' '}
                                </h5>{' '}
                            </a>{' '}
                            <div class="flex items-center mt-2.5 mb-5">
                                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    {' '}
                                    1, 745 global ratings{' '}
                                </p>{' '}
                            </div>{' '}
                            <div class="flex items-center justify-between">
                                <span class="text-3xl font-bold text-gray-900 dark:text-white"> $599 </span>{' '}
                                <Link to={'/products/1'}>
                                    {' '}
                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
                                        Read More{' '}
                                    </button>{' '}
                                </Link>{' '}
                            </div>{' '}
                        </div>{' '}
                    </div>
                ))}{' '}
            </div>{' '}
        </div>
    )
}
