import {BsSend} from "react-icons/bs"
const InputMessage = () => {
  return (
    <form action="" className=" px-20 my-3 absolute bottom-0 w-full">
        <div className="w-full relative">
            <input type="text" className="border text-sm rounded-lg block w-full p-4 bg-gray-700 border-gray-600 text-white" 
             placeholder="Send a Message"
            />
            <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
                <BsSend/>
            </button>
        </div>

    </form>
  )
}

export default InputMessage