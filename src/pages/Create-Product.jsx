import React from 'react'

export default function Create() {
    return (
        <form>
            <label class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-5" for="grid-first-name">
                Create Product{' '}
            </label>{' '}
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3 mb-6 md:mb-0">
                    <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name"
                    >
                        First Name{' '}
                    </label>{' '}
                    <input
                        class="appearance-none block w-full w-1/2 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Enter your first name"
                    />
                    <p class="text-red-500 text-xs italic"> Please fill out this field. </p>{' '}
                </div>{' '}
            </div>{' '}
        </form>
    )
}
