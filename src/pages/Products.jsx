/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
const popularProducts = [
    {
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
    },
    {
        room_ID: '17a20de6-8a04-4d53-b780-046210408511',
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
    },
    {
        room_ID: '6fd3fd0c-8506-4f57-984a-44f400d04662',
        images: [
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676537282/www/dlxufch7i7zljl1rjmeu.jpg',
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676537287/www/wsi0udzdmwhvwuiru1xf.jpg',
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676537292/www/ldnhangmbu5mvzgfqbcz.jpg',
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676537300/www/bx8rngah7bafe63advah.jpg',
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676537304/www/tvbbx5gb2yq9gkyjgj9g.jpg',
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676537310/www/hiowfpdjxadjklwj3j8m.jpg'
        ],
        price: 50.0,
        type_ID: 'T006',
        acreage: 36,
        description:
            'Rooms are designed in a modern architectural style to bring a comfortable, cozy and luxurious feeling. The space in the room is cool and clean, each room has windows facing out, all rooms are equipped with modern and comfortable equipment, closed rooms with bath tubs, meeting the needs of all businesses. businessmen and tourists',
        services: ['Spa & Massage', 'Gourmet Trip', 'Art break and relaxation', 'Daily Clean Up', 'Swimming Pool'],
        vote: 0,
        roomName: 'Deluxe Twin',
        limitQuantity: 2
    },
    {
        room_ID: '7',
        images: ['a', 'b'],
        price: 1.0,
        type_ID: 'a',
        acreage: 1,
        description: 'a',
        services: ['a', 'b'],
        vote: 1,
        roomName: 'b',
        limitQuantity: 1
    },
    {
        room_ID: '8deade24-5e7b-485a-ade2-e2c43767e783',
        images: [
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676538551/www/ix5pdiwyvyeojrcc6r6r.jpg',
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676538559/www/xqwpjg8fextmvxgmou4u.png',
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676538564/www/ri6kzftnudc6zwdjsapz.png',
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676538575/www/fxldutlhq9uyqwsizgch.png',
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676538585/www/zfwrjigdvnfdyo80gdcz.png'
        ],
        price: 39.0,
        type_ID: 'T015',
        acreage: 32,
        description:
            'Luxuriously and perfectly designed with modern amenities, meet up all your relaxed stay in quite room with small city view window',
        services: ['Spa & Massage', 'Gourmet Trip', 'Art break and relaxation', 'Daily Clean Up', 'Swimming Pool'],
        vote: 0,
        roomName: 'Superior Twin',
        limitQuantity: 2
    },
    {
        room_ID: '975d33dc-c157-4818-94eb-6837b4d569e5',
        images: [
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676537030/www/dcbteu6lucycbjwfw4nl.jpg',
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676537033/www/bf2pk8judlnxpbomudeb.jpg',
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676537037/www/fzklocjwoni6etapfqhp.jpg',
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676537042/www/mlmrmzraqlbg0lasj2sc.jpg',
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676537045/www/bgcbhdex9jyhbymilkys.jpg',
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676537048/www/ktbfhyxx1vdtg3av4qaw.jpg',
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676537051/www/jhb6eak1gmbqb1rv3ywt.jpg',
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676537055/www/loxccanb8yamqkxhxgem.jpg',
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676537058/www/crjiakyqhvppo9v4x9n8.jpg'
        ],
        price: 500.0,
        type_ID: 'T006',
        acreage: 36,
        description:
            'Designed with spaciousness and convenience suitable for families or long-staying business people, the unique and luxurious style is evident in every room. The decoration is harmonious, with elegant colors, creating a sense of tranquility and warmth for guests to relax in here',
        services: ['Spa & Massage', 'Gourmet Trip', 'Art break and relaxation', 'Daily Clean Up', 'Swimming Pool'],
        vote: 0,
        roomName: 'Deluxe King',
        limitQuantity: 1
    },
    {
        room_ID: 'd34be24c-60e0-4cb7-94f5-308fb8e75426',
        images: [
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676537583/www/beekhl3sb7txww3o5s0l.jpg',
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676537587/www/b6ztdfdad868by7cg6w6.jpg',
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676537591/www/f5kuj1dmi36rxgr9ghou.jpg',
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676537595/www/jg0esqaucurs3qqxzuep.jpg',
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676537600/www/eqr0qdbrhrcohrfise0m.jpg',
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676537605/www/amndy72bwqksnbuojo4i.jpg'
        ],
        price: 99.0,
        type_ID: 'T008',
        acreage: 60,
        description:
            'Executive Suite room is equipped with modern facilities, spacious, luxurious furniture, elegant design to give you a feeling of comfort and warmth like being in your own home.',
        services: ['Spa & Massage', 'Gourmet Trip', 'Art break and relaxation', 'Daily Clean Up', 'Swimming Pool'],
        vote: 0,
        roomName: 'Executive Suite',
        limitQuantity: 1
    },
    {
        room_ID: 'd91952eb-6f55-44dc-a0e9-c55a06183446',
        images: [
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676538180/www/jnvwinn5murlitdlvnil.jpg',
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676538211/www/g70dmwfuyg5fwu6mctrx.png',
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676538231/www/ecpvadkf5tikaplryi0u.png',
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676538249/www/a4qyynqwu480gatqnb4b.png',
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676538298/www/ksbkhofydare2tov45xg.png',
            'https://res.cloudinary.com/dkh1ozkvt/image/upload/v1676538306/www/fk0renmq7ud5tpmxl334.png'
        ],
        price: 999.0,
        type_ID: 'T008',
        acreage: 150,
        description:
            'Luxuriously and perfectly designed with modern amenities, meet up all your relaxed stay in quite room with big city view window, 2 room',
        services: ['Spa & Massage', 'Gourmet Trip', 'Art break and relaxation', 'Daily Clean Up', 'Swimming Pool'],
        vote: 0,
        roomName: 'Presidential Suite',
        limitQuantity: 2
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
                    <div class="w-full ml-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-9 text-center">
                        <a href="#">
                            <img class="p-8 rounded-t-lg" src={product.images[0]} alt="product image" />
                        </a>{' '}
                        {''}{' '}
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h1 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    {' '}
                                    {product.roomName}
                                </h1>{' '}
                            </a>{' '}
                            <h7 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                {' '}
                                {product.description}
                            </h7>{' '}
                            <br></br>
                            <h7 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                {' '}
                                acreage :{product.acreage}
                            </h7>{' '}
                            <div class="flex items-center mt-2.5 mb-5">
                                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    {' '}
                                    1, 745 global ratings{' '}
                                </p>{' '}
                            </div>{' '}
                            <div class="flex items-center justify-between text ">
                                <span class="text-3xl font-bold text-gray-900 dark:text-white text-">
                                    {' '}
                                    ${product.price}{' '}
                                </span>{' '}
                                <Link to={`/products/${product.room_ID}`}>
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
