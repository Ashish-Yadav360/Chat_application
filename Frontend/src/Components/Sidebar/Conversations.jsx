import useGetConversation from "../../../Hooks/useGetConversation";
import Conversation from "./Conversation";
import getRandomEmoji from "../../../utils/emoji";

const Conversations = () => {
  const {loading,conversations}= useGetConversation();
  console.log("CONVERSATIONS",conversations);
  return (
    <div className="conversations-container flex-col p-3 overflow-auto">
        {conversations.map((conversation)=>(
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
          />
        ))}
       {loading?<span className="laoding loading-spinner mx-auto"></span>:null}
    </div>
  );
};

export default Conversations;
