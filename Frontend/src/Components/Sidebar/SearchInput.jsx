import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <div>
        <form className="flex items-center gap-10 mt-2">
           <input type="text" placeholder="Search..." className="input input-bordered w-full max-w-xs px-20" />
           <button type="submit" className="btn btn-circle bg-emerald-800 text-white m-5">
           <IoSearchSharp className="w-6 h-6 text-white" />
           </button>
        </form>
    </div>
  )
}

export default SearchInput