'use client'

import { FiMenu } from 'react-icons/fi';
import { BsArrowLeftShort, BsArrowRightShort, BsChevronDown, BsFillImageFill, BsPerson, BsReverseBackspaceReverse, BsSearch } from 'react-icons/bs';
import { slide as Menu } from 'react-burger-menu';
import { useEffect, useState } from 'react';
import { AiFillEnvironment, AiOutlineBarChart, AiOutlineFileText, AiOutlineMail, AiOutlineSetting } from 'react-icons/ai';
import { RiDashboardFill } from 'react-icons/ri';
import { TbBuildingChurch } from 'react-icons/tb';
import Link from 'next/link';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import { Menus } from './UserMenus';



const UserSidebar = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [subMenuOpen, setSubMenuOpen] = useState('')
  let segment = useSelectedLayoutSegment()

  let currentPath = usePathname()

  console.log('currentPath', currentPath)



  // const Menus = [
  //   { title: "Dashboard", url_to: '/dashboard' },
  //   { title: "Pages", icon: <AiOutlineFileText />, url_to: '/pages' },
  //   { title: "Media", spacing: true, icon: <BsFillImageFill />, url_to: '/media' },
  //   {
  //     title: "Media",
  //     icon: <BsReverseBackspaceReverse />,
  //     url_to: '/media-1',
  //     submenu: true,
  //     submenuItems: [
  //       { title: "Submenu 1", icon: <BsReverseBackspaceReverse />, url_to: '/dashboard', },
  //       { title: "Submenu 2", icon: <BsReverseBackspaceReverse />, url_to: '/', },
  //       { title: "Submenu 3", icon: <BsReverseBackspaceReverse />, url_to: '/media-1/sub-menu-3', },
  //     ]
  //   },

  //   {
  //     title: "Playlist",
  //     icon: <BsReverseBackspaceReverse />,
  //     url_to: '/playlist-1',
  //     submenu: true,
  //     submenuItems: [
  //       { title: "Submenu 1", icon: <BsReverseBackspaceReverse />, url_to: '/dashboard', },
  //       { title: "Submenu 2", icon: <BsReverseBackspaceReverse />, url_to: '/', },
  //       { title: "Submenu 3", icon: <BsReverseBackspaceReverse />, url_to: '/media-1/sub-menu-3', },
  //     ]
  //   },
  //   { title: "Analytics", icon: <AiOutlineBarChart />, url_to: '/analytics' },
  //   { title: "Inbox", icon: <AiOutlineMail />, url_to: '/inbox' },
  //   { title: "Profile", spacing: true, icon: <BsPerson />, url_to: '/profile' },
  //   { title: "Setting", icon: <AiOutlineSetting />, url_to: '/settings' },
  // ]

  return (
    <div className={`
    bg-dark-purple
    duration-300
    h-screen
    p-5
    pt-8
    ${isOpen ? "w-64" : "w-20"}
    relative
   `}>
      <BsArrowLeftShort
        className={` 
    bg-white 
    text-dark-purple 
    text-3xl 
    rounded-full
    absolute
    -right-3
    top-9
    border
    border-dark-purple
    cursor-pointer
    ${!isOpen && "rotate-180"}
    `}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className='inline-flex'>
        <TbBuildingChurch className={`
    bg-purple-300
    text-4xl
    rounded
    cursor-pointer
    block
    float-left
    mr-2
    duration-500
    ${isOpen && "rotate-[360deg]"}
    `} />
        <h1 className={`
    origin-left
    text-2xl
    duration-300
    font-bold 
    bg-gradient-to-r
  from-green-400 
  via-red-600 
  to-purple-400 
   text-transparent 
   bg-clip-text
    ${!isOpen && "scale-0"}   
    `}
        >The Name</h1>
      </div>
      <div className={`
    flex
    items-center
    rounded-md
    bg-light-white
    mt-6
    ${!isOpen ? "px-2.5" : "px-4"}
    py-2
  `}>
        <BsSearch className={`
     text-white
     text-lg
     block
     float-left 
     cursor-pointer
     ${isOpen && "mr-2 "}
     `} />
        <input
          type={'search'}
          placeholder='Search'
          className={`
      text-base
      bg-transparent
      w-full
      text-white
      focus:outline-none
      ${!isOpen && "hidden"}
     `} />
      </div>
      <ul className='pt-2'>
        {
          Menus.map((menu, index) => (
            <>
              <Link href={`${menu.url_to && !menu.submenu ? menu.url_to : "#"}`}>
                <li key={index} className={`
                text-gray-300
                text-sm
                flex
                items-center
                gap-x-4
                p-2
                cursor-pointer
                hover:bg-light-white
                rounded-md
                font-bold
                ${menu.spacing ? "mt-9" : "mt-2"}
                ${menu.submenu ? "duration-500" : ""}
                ${menu.url_to === currentPath ? "bg-gray-400" : ""}
                ${menu.url_to === currentPath ? "text-gray-800" : ""}
               `
                }
                  onClick={() => menu.submenu && isOpen ? setSubMenuOpen(subMenuOpen === menu.title ? '' : menu.title) : {}}
                >
                  <span className='
                  text-2xl
                  black
                  float-left
                '>
                    {menu.icon ? menu.icon : <RiDashboardFill />}
                  </span>
                  <span className=
                    {`
                text-base
                font-medium
                flex-1
                duration-200
                ${!isOpen && "hidden"}`
                    }>
                    {menu.title}
                  </span>
                  {menu.submenu && isOpen && (
                    <BsChevronDown className={
                      `
                    duration-300
                    delay-[300ms]
                    flex flex-col 
                    transition-all
                    ease-out
                    ${subMenuOpen === menu.title && "rotate-180"}
                    `
                    }
                      onClick={() => setSubMenuOpen(subMenuOpen === menu.title ? '' : menu.title)}
                    />
                  )}
                </li>
                {menu.submenu && subMenuOpen === menu.title && isOpen && (
                  <ul>
                    {menu.submenuItems.map((submenuItem, index) => (
                      <Link href={`${submenuItem.url_to ? submenuItem.url_to : "#"}`}>
                        <li key={index} className={`
                    text-gray-300
                text-sm
                flex
                items-center
                gap-x-4
                p-2
                px-5
                font-bold
                cursor-pointer
                hover:bg-light-white
                rounded-md
                duration-500
                delay-[300ms]
                ${submenuItem.url_to === currentPath ? "bg-gray-400" : ""}
                ${submenuItem.url_to === currentPath ? "text-gray-800" : ""}
                  `}>
                          <span className='
                  text-2xl
                  black
                  float-left
                  duration-300
                '>
                            {submenuItem.icon ? submenuItem.icon : <RiDashboardFill />}
                          </span>
                          {submenuItem.title}
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </Link>
            </>
          ))
        }
      </ul>
    </div>
  );
};

export default UserSidebar;
