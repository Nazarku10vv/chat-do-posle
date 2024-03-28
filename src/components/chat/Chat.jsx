import React, { useEffect, useState } from 'react'
import { TiArrowForward } from 'react-icons/ti'
import { productContext } from '../../context/ProductContext'
import { context } from '../../context/AuthContext'
import { MdDelete } from 'react-icons/md'

const Chat = () => {
    const { addProduct, readProduct, data, deleteProduct } = productContext()
    const { user } = context()

    const [inputValuesChat, setInputValuesChat] = useState('')

    function handleChatProduct() {
        let obj = {
            message: inputValuesChat,
            idd: Date.now()
        }
        addProduct(obj)
        setInputValuesChat('')
    }

    useEffect(() => {
        readProduct()
    }, [])

    console.log(data)

    return (
        <div className='main'>
            <div className='p-4'>
                <div className='w-full p-4 border-2 border-gray-900 border-dashed rounded-lg dark:border-gray-900'>
                    <div className='main flex items-start justify-start h-[90vh] mb-4 rounded bg-gray-50 dark:bg-gray-800'>
                        <div className='flex items-start content-start flex-col'>
                            {data?.map((el, index) => (
                                <div className='flex items-center gap-4' key={index}>
                                    <div className='w-[200px] ml-3 flex items-center pl-1 content-center  mt-5  bg-white'>
                                        <p className='text-2xl text-bфlack-400 dark:text-black-500'>
                                            {el.message}
                                        </p>
                                    </div>
                                    <button
                                        className='text-red-600 text-3xl pt-5'
                                        onClick={() => deleteProduct(el.id)}
                                    >
                                        <MdDelete />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    {user ? (
                        <div className='mb-6 flex items-center gap-5'>
                            <input
                                type='text'
                                id='large-input'
                                className='main block w-full h-[50px]  pl-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                placeholder='Видите сообщение'
                                value={inputValuesChat}
                                onChange={e => setInputValuesChat(e.target.value)}
                                onKeyDown={e => {
                                    if (e.key === 'Enter') {
                                        handleChatProduct();
                                    }
                                }}
                            />
                            <button
                                type='button'
                                className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-[10px] py-[10px]   dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 h-[50px]'
                                onClick={handleChatProduct}
                            >
                                <TiArrowForward />
                            </button>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>
    )
}

export default Chat
