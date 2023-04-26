import React, { useState } from 'react'
const product = {
    room_ID: '1',
    images: [
        'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676537974/www/uusrfnmk6xfl8caif6j2.jpg',
        'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676537982/www/kjzg00m5pxlif2rvbfkw.jpg',
        'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676537988/www/v2r4dzrjiuj4ftrpetta.png',
        'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676537993/www/jsybwmhv9nckxvd8gw5n.png',
        'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676538007/www/wew7yhxt8yvyroxz8uby.png'
    ],
    price: 499.0,
    type_ID: 'T009',
    acreage: 80,
    description:
        'Luxuriously and perfectly designed with modern amenities, meet up all your relaxed stay in quite room with big city view window.',
    services: ['Spa & Massage', 'Gourmet Trip', 'Art break and relaxation', 'Daily Clean Up', 'Swimming Pool'],
    vote: 0,
    roomName: 'Apartment',
    limitQuantity: 3
}

const ProductDetail = () => {
    const [showModalEdit, setShowModalEdit] = useState(false)
    const [showModalDelete, setShowModalDelete] = useState(false)
    return (
        <div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg text-center center m-auto">
                <img class="w-full" src={product.images[0]} alt="room img" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2"> {product.roomName}</div>{' '}
                    <p class="text-gray-700 text-base"> Acreage : {product.acreage} m2 </p>{' '}
                    <p class="text-gray-700 text-base"> star rating </p>
                    <p class="text-gray-700 text-base"> ${product.price} </p>{' '}
                </div>{' '}
                <div class="px-6 pt-4 pb-5 flex-row text-center">
                    <button
                        class="bg-green-700 hover:bg-green-300 text-white font-bold mr-3 py-2 px-4 rounded-full w-1/3"
                        type="button"
                        onClick={() => setShowModalEdit(true)}
                    >
                        Edit
                    </button>
                    <button
                        class="bg-red-700 hover:bg-red-300 text-white font-bold py-2 px-4 rounded-full w-1/3"
                        type="button"
                        onClick={() => setShowModalDelete(true)}
                    >
                        Delete
                    </button>
                </div>{' '}
            </div>
            {showModalEdit ? (
                <>
                    <div className=" flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-full my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                    <h3 className="text-3xl font=semibold ">Edit Room</h3>
                                    <button
                                        className="bg-transparent border-0 text-black float-right"
                                        onClick={() => setShowModalEdit(false)}
                                    >
                                        <span className="text-black opacity-7 h-6 w-7 text-xl block bg-gray-400 py-0 rounded-full">
                                            x
                                        </span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                                        <label className="block text-black text-sm font-bold mb-1">Room Name</label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                            value={product.roomName}
                                        />
                                        <label className="block text-black text-sm font-bold mb-1">Type Room</label>
                                        <select
                                            id="type"
                                            class="shadow-md bg-gray-50 border border-white-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        >
                                            <option selected>Choose a type room</option>
                                            <option value="US">{product.type_ID}</option>
                                        </select>
                                        <label className="block text-black text-sm font-bold mb-1">
                                            Limit Quantity
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                            value={product.limitQuantity}
                                        />
                                        <label className="block text-black text-sm font-bold mb-1">Areage</label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                            value={product.acreage}
                                        />
                                        <label className="block text-black text-sm font-bold mb-1">Description</label>
                                        <textarea
                                            className="shadow appearance-none border rounded w-full h-20 py-2 px-1 text-black"
                                            value={product.description}
                                        />
                                    </form>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => setShowModalEdit(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => setShowModalEdit(false)}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    )
}
export default ProductDetail
