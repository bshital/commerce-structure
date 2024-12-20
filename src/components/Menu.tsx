'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react"
import MenuItems from "./MenuItems";

const Menu = () => {
	const [open, setOpen] = useState(false);

  return (
    <div className="">
			<Image
				src="/menu.png"
				alt=""
				width={28}
				height={28}
				className="cursor-pointer"
				onClick={() => setOpen((prev) => !prev)}
			/>{
				open && (
					<div className="absolute w-full bg-black text-white left-0 top-20 h[calc(100vh - 80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
						<MenuItems />
					</div>
				)
			}
		</div>
  )
}

export default Menu