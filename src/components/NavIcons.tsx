'use client'

import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useReducer, useState } from "react"
import CartModal from "./CartModal";

const NavIcons = () => {
	const [isProfileOpen, setIsProfileOpen] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);

	const router = useRouter();

	const isLoggedIn = false
	// Handle profile
	const handleProfile = () => {
		if (!isLoggedIn) {
			router.push('/login')
		} 
		setIsProfileOpen((prev) => !prev)
	}

  return (
	<div className="flex items-center gap-4 xl:gap-6 relative">
			{/* Profile Icon */}
	  <Image 
				src="/profile.png" alt="" width={22} height={22} className="cursor-pointer" 
				onClick={handleProfile}
			/>
			{isProfileOpen && (
				<div className="absolute rounded-md top-12 left-0 text-sm p-4 z-20 shadow-[0_3px_12px_rgb(0,0,0,0.2)]">
					<Link href="/">Profile</Link>
					<div className="mt-2 cursor-pointer">Logout</div>
				</div>
			)}

			{/* Notification Icons */}
			<Image src="/notification.png" alt="" width={22} height={22} className="cursor-pointer" />

			{/* Cart Icon */}
			<div className="relative cursor-pointer" onClick={() => setIsCartOpen((prev) => !prev)}>
				<Image 
					src="/cart.png" alt="" width={22} height={22} />
				<div className="absolute -top-4 -right-4 w-6 h-6 bg-red rounded-full text-white text-sm flex items-center justify-center">
					2
				</div>
			</div>
			{isCartOpen && <CartModal />}
		</div>
  )
}

export default NavIcons