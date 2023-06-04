"use client";
import { AiOutlineMenu } from "react-icons/ai";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import Avatar from "../Avatar";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  currentUser?: [];
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

 
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3 mr-22">
        <div
          onClick={() =>{}}
          className="
                    hidden 
                    md:block 
                    text-sm 
                    font-semibold 
                    py-3 px-4 
                    rounded-full
                    hover:bg-neutral-100 
                    transition 
                    cursor-pointer"
        >
          
          {/* Create An Invoice */}
        </div>
        <div
          onClick={toggleOpen}
          className="
                   p-4
                   md:py-1
                   md:px-2
                   border-[1px]
                   border-neutral-200
                   flex
                   flex-row
                   items-center
                   gap-3
                   rounded-full
                   cursor-pointer
                   hover:shadow-md
                   transition
                "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen &&
        (currentUser ? (
          <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 text-sm ">
            <div className="flex flex-col cursor-point">
              <>
                <MenuItem onClick={() => {}} label="My Profile" />
                <MenuItem onClick={() => signOut()} label="Logout" />
              </>
            </div>
          </div>
        ) : (
          <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 text-sm ">
            <div className="flex flex-col cursor-point">
              <>
                <MenuItem onClick={() => {}} label="Login" />
              </>
            </div>
          </div>
        ))}
    </div>
  );
};

export default UserMenu;
