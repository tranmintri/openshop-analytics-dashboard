import React from 'react'
import { getOrderStatus } from '../lib/helpers'

const data = [
    {
        lastName: 'chau',
        role: 'USER',
        avatar: 'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676528397/www/to6cufah9zppaop9e2un.jpg',
        firstName: 'tuyen',
        phone: '0366231860',
        id: '1',
        email: 'tuyen@gmail.com',
        status: false
    },
    {
        lastName: 'chau',
        role: 'USER',
        avatar: 'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676528397/www/to6cufah9zppaop9e2un.jpg',
        firstName: 'tuyen',
        phone: '0366231860',
        id: '1',
        email: 'tuyen@gmail.com',
        status: false
    },
    {
        lastName: 'chau',
        role: 'USER',
        avatar: 'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676528397/www/to6cufah9zppaop9e2un.jpg',
        firstName: 'tuyen',
        phone: '0366231860',
        id: '1',
        email: 'tuyen@gmail.com',
        status: false
    },
    {
        lastName: 'chau',
        role: 'USER',
        avatar: 'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676528397/www/to6cufah9zppaop9e2un.jpg',
        firstName: 'tuyen',
        phone: '0366231860',
        id: '1',
        email: 'tuyen@gmail.com',
        status: false
    },
    {
        lastName: 'chau',
        role: 'USER',
        avatar: 'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676528397/www/to6cufah9zppaop9e2un.jpg',
        firstName: 'tuyen',
        phone: '0366231860',
        id: '1',
        email: 'tuyen@gmail.com',
        status: false
    },
    {
        lastName: 'chau',
        role: 'USER',
        avatar: 'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676528397/www/to6cufah9zppaop9e2un.jpg',
        firstName: 'tuyen',
        phone: '0366231860',
        id: '1',
        email: 'tuyen@gmail.com',
        status: false
    }
]

export default function Customer() {
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium"> Customer </strong>{' '}
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="w-full text-gray-700">
                    <thead>
                        <tr>
                            <th> Customer ID </th>
                            <th> Avatar </th>
                            <th> Last Name </th>
                            <th> First Name </th>
                            <th> Phone </th>
                            <th> Email </th>
                            <th> </th>
                            <th></th>
                        </tr>{' '}
                    </thead>{' '}
                    <tbody>
                        {' '}
                        {data.map((user) => (
                            <tr key={user.id}>
                                <td> {getOrderStatus(user.id)} </td>{' '}
                                <td>
                                    {' '}
                                    <img
                                        class="rounded-full w-20 h-20"
                                        src={user.avatar}
                                        alt="image description"
                                    ></img>{' '}
                                </td>{' '}
                                <td> {getOrderStatus(user.lastName)} </td> <td> {getOrderStatus(user.firstName)} </td>{' '}
                                <td> {getOrderStatus(user.phone)} </td> <td> {getOrderStatus(user.email)} </td>{' '}
                                <td>
                                    <button
                                        type="button"
                                        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30"
                                            height="30"
                                            fill="currentColor"
                                            class="bi bi-trash"
                                            viewBox="0 0 16 16"
                                        >
                                            {' '}
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />{' '}
                                            <path
                                                fill-rule="evenodd"
                                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                            />{' '}
                                        </svg>
                                    </button>
                                </td>{' '}
                            </tr>
                        ))}{' '}
                    </tbody>{' '}
                </table>{' '}
            </div>{' '}
        </div>
    )
}
