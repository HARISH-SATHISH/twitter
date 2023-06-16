import {BsTwitter} from 'react-icons/bs'
import{BiHome,BiUser}from 'react-icons/bi'
import{CgHashtag}from 'react-icons/cg'
import{IoMdNotificationsOutline}from 'react-icons/io'
import{FiBookmark}from 'react-icons/fi'
import{SlEnvolope}from 'react-icons/sl'
import { Inter } from 'next/font/google'
import{CgMoreO}from 'react-icons/cg'
import Feed from '@/components/feedsection'

const inter = Inter({ subsets: ['latin'] })

interface Twittersidebar{
  title:string,
  icon:React.ReactNode
}


const slidebarlist: Twittersidebar[]=[
  {
    title:"Home",
    icon:<BiHome/>
  },
  {
    title:"Explore",
    icon:<CgHashtag/>
  },
  {
    title:"Notification",
    icon:<IoMdNotificationsOutline/>
  },
  {
    title:"Message",
    icon:<SlEnvolope/>
  },
  {
    title:"Bookmark",
    icon:<FiBookmark/>
  },
  {
    title:"Profile",
    icon:<BiUser/>
  },
  {
    title:"More",
    icon:<CgMoreO/>
  }
]

export default function Home() {
  return (
    <div className='grid grid-cols-12 h-screen w-screen  pl-12 '>
      <div className='col-span-2'>
        <div className='flex justify-start p-3 mt-1 text-3xl hover:bg-gray-300 w-fit h-fit rounded-full transition-all cursor-pointer'><BsTwitter/></div>
        <div className='mt-3 '>
          <ul >
            {slidebarlist.map((item)=><li key={item.title} className='flex justify-start  gap-3 text-2xl items-center hover:bg-gray-300 w-fit py-1 px-3 rounded-3xl mb-2 transition-all cursor-pointer'><span>{item.icon}</span><span>{item.title}</span></li>)}
          </ul>
        </div>
        <div className='px-2'>
        <button className='text-2xl bg-black text-white w-full
         rounded-full  px-8 py-2 hover:bg-gray-800 transition-color mt-4 '>Tweet</button>
        </div>
      </div>
      <div className='col-span-6  h-screen overflow-scroll pl-3'><Feed/>
      <Feed/>
      <Feed/>
      <Feed/>
      <Feed/>
      <Feed/>
      </div>
      
      <div className='col-span-4'></div>

    </div>
  )
}
