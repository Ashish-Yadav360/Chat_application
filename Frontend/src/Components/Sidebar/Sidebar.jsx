import SearchInput from "./SearchInput"
import Conversations from "./Conversations"
import LogOutButton from "./LogOutButton"
const Sidebar = () => {
  return (
    <div className="border-r border-slate-50 px-2 flex flex-col">
        <SearchInput/>
        <div className="divider px-3"></div>
        <Conversations />
        <LogOutButton />
    </div>
  )
}

export default Sidebar