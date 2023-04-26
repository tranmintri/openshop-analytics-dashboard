import React from 'react'
import { getOrderStatus } from '../lib/helpers'
import { da } from 'date-fns/locale'

const data = {
    lastName: 'chau',
    role: 'USER',
    avatar: 'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676528397/www/to6cufah9zppaop9e2un.jpg',
    firstName: 'tuyen',
    phone: '0366231860',
    id: '1',
    email: 'tuyen@gmail.com',
    status: false
}

export default function Profile() {
    return (
        <div class="flex items-center h-screen w-full justify-center">
            <div class="max-w-xl w-full">
                <div class="bg-white shadow-xl rounded-lg py-3 ">
                    <div class="photo-wrapper p-2">
                        <img class="w-40 h-40 rounded-full mx-auto" src={data.avatar} alt="John Doe" />
                    </div>
                    <div class="p-2">
                        <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
                            {data.firstName + ' ' + data.lastName}
                        </h3>
                        <div class="text-center text-gray-400 text-xs font-semibold">
                            <p>{data.role}</p>
                        </div>
                        <table class="text-x w-full ">
                            <tbody>
                                <tr>
                                    <td class=" px-2 py-2 text-gray-500 font-semibold text-center">Email</td>
                                    <td class="px-2 py-2 text-left">{data.email}</td>
                                </tr>
                                <tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold text-center">Phone</td>
                                    <td class="px-2 py-2 text-left">{data.phone}</td>
                                </tr>
                                <tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold text-center">Address</td>
                                    <td class="px-2 py-2 text-left">john@exmaple.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
