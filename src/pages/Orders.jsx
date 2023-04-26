import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers'

const orderData = [
    {
        bill_ID: '1',
        date: '2022-01-24',
        billDetails: null,
        total: 100,
        userID: '1'
    },
    {
        bill_ID: '10',
        date: '2022-02-06',
        billDetails: null,
        total: 50,
        userID: '1'
    },
    {
        bill_ID: '11',
        date: '2022-03-24',
        billDetails: null,
        total: 200,
        userID: '1'
    },
    {
        bill_ID: '12',
        date: '2022-04-25',
        billDetails: null,
        total: 300,
        userID: '1'
    },
    {
        bill_ID: '13',
        date: '2022-12-26',
        billDetails: null,
        total: 100,
        userID: '1'
    },
    {
        bill_ID: '14',
        date: '2022-11-20',
        billDetails: null,
        total: 50,
        userID: '1'
    },
    {
        bill_ID: '15',
        date: '2022-05-26',
        billDetails: null,
        total: 50,
        userID: '1'
    },
    {
        bill_ID: '16',
        date: '2022-02-01',
        billDetails: null,
        total: 50,
        userID: '1'
    },
    {
        bill_ID: '2',
        date: '2022-04-01',
        billDetails: null,
        total: 100,
        userID: '1'
    },
    {
        bill_ID: '20',
        date: '2022-06-26',
        billDetails: null,
        total: 200,
        userID: '1'
    },
    {
        bill_ID: '3',
        date: '2022-07-26',
        billDetails: null,
        total: 300,
        userID: '1'
    },
    {
        bill_ID: '4',
        date: '2022-08-26',
        billDetails: null,
        total: 50,
        userID: '1'
    },
    {
        bill_ID: '5',
        date: '2022-09-26',
        billDetails: null,
        total: 100,
        userID: '1'
    },
    {
        bill_ID: '6',
        date: '2022-07-26',
        billDetails: null,
        total: 200,
        userID: '1'
    },
    {
        bill_ID: '7',
        date: '2022-10-26',
        billDetails: null,
        total: 300,
        userID: '1'
    },
    {
        bill_ID: '8',
        date: '2022-11-26',
        billDetails: null,
        total: 200,
        userID: '1'
    }
]

export default function Orders() {
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium"> Recent Orders </strong>{' '}
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="w-full text-gray-700">
                    <thead>
                        <tr>
                            <th> Bill ID </th>
                            <th> date </th>
                            <th> total </th>
                            <th> User ID </th>
                        </tr>{' '}
                    </thead>{' '}
                    <tbody>
                        {' '}
                        {orderData.map((order) => (
                            <tr key={order.id}>
                                <td>
                                    <Link to={`/orders/${order.bill_ID}`}> {order.bill_ID} </Link>{' '}
                                </td>{' '}
                                <td> {format(new Date(order.date), 'dd MMM yyyy')} </td> <td> {order.total} </td>
                                <td> {getOrderStatus(order.userID)} </td>{' '}
                            </tr>
                        ))}{' '}
                    </tbody>{' '}
                </table>{' '}
            </div>{' '}
        </div>
    )
}
