import Image from "next/image";

const NavIcons = () => {
    return (
        <div className='flex items-center gap-4 xl:gap-6'>
            <Image src="/assets/profile.png" alt="" width={22} height={22} className="cursor-pointer" />
            <Image src="/assets/notification.png" alt="" width={22} height={22} className="cursor-pointer" />
            <Image src="/assets/cart.png" alt="" width={22} height={22} className="cursor-pointer" />
        </div>
    )
}

export default NavIcons 

