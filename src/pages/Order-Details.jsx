import React, { useState } from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers'
const billDetails = [
    {
        bill_id: '1',
        room_id: '1',
        adultNum: 2,
        checkIn: '2022-09-26',
        childrenNum: 1,
        checkOut: '2022-09-28'
    },
    {
        bill_id: '1',
        room_id: '2',
        adultNum: 2,
        checkIn: '2022-09-26',
        childrenNum: 1,
        checkOut: '2022-09-28'
    },
    {
        bill_id: '1',
        room_id: '3',
        adultNum: 2,
        checkIn: '2022-09-26',
        childrenNum: 1,
        checkOut: '2022-09-28'
    }
]

export default function OrderDetails() {
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium"> Order Details </strong>{' '}
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="w-full text-gray-700">
                    <thead>
                        <tr>
                            <th> Bill ID </th>
                            <th> Room ID </th>
                            <th> Audult Number </th>
                            <th> Children Number </th>
                            <th> Check In Date </th>
                            <th> Check Out Date </th>
                        </tr>{' '}
                    </thead>{' '}
                    <tbody>
                        {' '}
                        {billDetails.map((billDetail) => (
                            <tr key={billDetail.bill_id}>
                                <td> {getOrderStatus(billDetail.bill_id)} </td>{' '}
                                <td>
                                    <Link to={`/products/${billDetail.room_id}`}> #{billDetail.bill_id} </Link>{' '}
                                </td>{' '}
                                <td> {getOrderStatus(String(billDetail.adultNum))} </td>{' '}
                                <td> {getOrderStatus(String(billDetail.childrenNum))} </td>{' '}
                                <td> {format(new Date(billDetail.checkIn), 'dd MMM yyyy')} </td>{' '}
                                <td> {format(new Date(billDetail.checkIn), 'dd MMM yyyy')} </td>{' '}
                            </tr>
                        ))}{' '}
                    </tbody>{' '}
                </table>{' '}
            </div>{' '}
        </div>
    )
}
