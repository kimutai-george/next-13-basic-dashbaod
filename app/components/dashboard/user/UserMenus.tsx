'use client'

import { AiFillEnvironment, AiOutlineBarChart, AiOutlineFileText, AiOutlineMail, AiOutlineSetting } from 'react-icons/ai';
import { RiDashboardFill } from 'react-icons/ri';
import { MdOutlineChurch } from 'react-icons/md';
import { BsArrowLeftShort, BsArrowRightShort, BsChevronDown, BsFillImageFill, BsPerson, BsReverseBackspaceReverse, BsSearch } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';


export const Menus = [
    { title: "Dashboard", url_to: '/dashboard' },
    { title: "Pages", icon: <AiOutlineFileText />, url_to: '/pages' },
    { title: "Media", spacing: true, icon: <BsFillImageFill />, url_to: '/media' },
    {
      title: "Media",
      icon: <BsReverseBackspaceReverse />,
      url_to: '/media-1',
      submenu: true,
      submenuItems: [
        { title: "Submenu 1", icon: <BsReverseBackspaceReverse />, url_to: '/dashboard', },
        { title: "Submenu 2", icon: <BsReverseBackspaceReverse />, url_to: '/', },
        { title: "Submenu 3", icon: <BsReverseBackspaceReverse />, url_to: '/media-1/sub-menu-3', },
      ]
    },

    {
      title: "System Setup",
      icon: <FiSettings />,
      url_to: '/set-up',
      submenu: true,
      submenuItems: [
        { title: "Item 1", icon: <MdOutlineChurch />, url_to: '/my-item-1', },
      ]
    },
    { title: "Analytics", icon: <AiOutlineBarChart />, url_to: '/analytics' },
    { title: "Inbox", icon: <AiOutlineMail />, url_to: '/inbox' },
    { title: "Profile", spacing: true, icon: <BsPerson />, url_to: '/profile' },
    { title: "Setting", icon: <AiOutlineSetting />, url_to: '/settings' },
  ]