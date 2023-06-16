import React from 'react'
import Image from 'next/image'
import { BiMessageRounded } from 'react-icons/bi'
import { AiOutlineRetweet, AiOutlineHeart, AiOutlineUpload } from 'react-icons/ai'

const Feed: React.FC = () => {
    return (
        <div className=' border-b-2 border-slate-500 pt-2 px-2 hover:bg-slate-300 cursor-pointer'>
            <div>
                <div className='grid grid-cols-12 gap-2'>
                    <div className=' col-span-1 w-fit pl-2'>
                        <Image src='https://avatars.githubusercontent.com/u/111165172?v=4' alt='dp' width={50} height={50} />
                    </div>
                    <div className=' col-span-11 justify-start  '>
                        <h3>Harish</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ullam earum necessitatibus!
                        </p>
                    </div>

                </div>
                <div className='flex justify-evenly py-2 text-lg '>
                    <div><BiMessageRounded /></div>
                    <div><AiOutlineRetweet /></div>
                    <div><AiOutlineHeart /></div>
                    <div><AiOutlineUpload /></div>
                </div>
            </div>
            
        </div>
    )
}




export default Feed