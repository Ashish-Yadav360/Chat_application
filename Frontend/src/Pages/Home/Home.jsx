import Sidebar from "../../Components/Sidebar/Sidebar"
import MessageContainer from "../../Components/Messages/MessageContainer"
const Home = () => {
  return (
    <div className="flex md:w-full lg:w-full rounded-lg mt-0 m-2">
      <Sidebar/>
      <MessageContainer />
    </div>
  )
}
export default Home