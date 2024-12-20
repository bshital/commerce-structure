'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

const SearchBar = () => {
	const router = useRouter();
	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		const formData = new FormData(e.currentTarget);
		const name = formData.get("name") as string;
		
		if(name) {
			router.push(`/list?name=${name}`)
		}
	};

  return (
    <form 
		className="flex items-center justify-between bg-gray-100 gap-4 p-2 rounded-md flex-1"
			onSubmit={handleSearch}
		>
      <input type="text" name="name" placeholder="Search" className="bg-transparent flex-1 outline-none"/>
			<button className="cursor-pointer">
				<Image src="/search.png" alt="" width={16} height={16} />
			</button>
    </form>
  )
}

export default SearchBar