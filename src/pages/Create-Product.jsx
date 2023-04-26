import React from 'react'

export default function Create() {
    return (
        <form>
            <label class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-5" for="grid-first-name">
                Create Product{' '}
            </label>{' '}
            <div class="flex mx-3 mb-6">
                <div class="w-full px-3 mb-6 md:mb-0">
                    <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name"
                    >
                        Room Name{' '}
                    </label>{' '}
                    <input
                        class="appearance-none block w-full w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Enter your first name"
                    />
                    <p class="text-red-500 text-xs italic"> Please fill out this field. </p>{' '}
                </div>{' '}
                <div class="w-full px-3 mb-6 md:mb-0">
                    <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name"
                    >
                        Acreage{' '}
                    </label>{' '}
                    <input
                        class="appearance-none block w-full w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Enter your first name"
                    />
                    <p class="text-red-500 text-xs italic"> Please fill out this field. </p>{' '}
                </div>
            </div>{' '}
            <div class="flex mx-3 mb-6">
                <div class="w-full px-3 mb-6 md:mb-0">
                    <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name"
                    >
                        Room Type{' '}
                    </label>{' '}
                    <select
                        id="type"
                        class="appearance-none block w-full w-full bg-gray-200 text-gray-400 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    >
                        <option selected>Choose a type room</option>
                        <option value="US">aaaa</option>
                    </select>
                    <p class="text-red-500 text-xs italic"> Please fill out this field. </p>{' '}
                </div>{' '}
                <div class="w-full px-3 mb-6 md:mb-0">
                    <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name"
                    >
                        Price{' '}
                    </label>{' '}
                    <input
                        class="appearance-none block w-full w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Enter your first name"
                    />
                    <p class="text-red-500 text-xs italic"> Please fill out this field. </p>{' '}
                </div>
                <div class="w-full px-3 mb-6 md:mb-0">
                    <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name"
                    >
                        Limit Quantity{' '}
                    </label>{' '}
                    <input
                        class="appearance-none block w-full w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Enter your first name"
                    />
                    <p class="text-red-500 text-xs italic"> Please fill out this field. </p>{' '}
                </div>
            </div>{' '}
            <div class="flex flex-wrap mx-3 mb-6">
                <div class="w-full px-3 mb-6 md:mb-0">
                    <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name"
                    >
                        Description{' '}
                    </label>{' '}
                    <textarea
                        class="appearance-none h-36 block w-full w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Enter your first name"
                    />
                </div>{' '}
            </div>{' '}
            <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" />
                <span class="ml-2 text-gray-700">Spa & Massage</span>
            </label>
            <label class="inline-flex items-center ml-9">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" />
                <span class="ml-2 text-gray-700">Gourmet Trip</span>
            </label>
            <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" />
                <span class="ml-2 text-gray-700">Art break and relaxation</span>
            </label>
            <label class="inline-flex items-center ml-9">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" />
                <span class="ml-2 text-gray-700">Daily Clean Up</span>
            </label>
            <label class="inline-flex items-center ml-9">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" />
                <span class="ml-2 text-gray-700">Swimming Pool</span>
            </label>
            <label class="w-2/12 mt-7 h-1/3 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-gray-100">
                <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M14.706 7.706l-4-4a.996.996 0 00-1.412 0l-4 4a.996.996 0 101.412 1.412L9 6.118V15a1 1 0 102 0V6.118l2.294 2.294a.996.996 0 101.412-1.412z" />
                </svg>
                <span class="mt-2 text-base leading-normal">Select a picture</span>
                <input type="file" class="hidden" />
            </label>
            <div class="w-40 h-40">
                <img src="path/to/image.jpg" alt="Ảnh của tôi" />
            </div>
            <button class="mt-7 mb-7 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
                Save{' '}
            </button>{' '}
        </form>
    )
}
