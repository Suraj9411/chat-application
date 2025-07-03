import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="min-h-screen bg-base-200 pt-20 px-4">

      <div className="mx-auto max-w-5xl h-[calc(100vh-6rem)] bg-base-100 rounded-lg shadow-lg overflow-hidden w-full">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Sidebar - horizontal on mobile, vertical on desktop */}
          <div className="w-full lg:w-1/3 h-20 lg:h-full border-b lg:border-b-0 lg:border-r border-base-300">
            <Sidebar />
          </div>

          {/* Chat area */}
          <div className="flex-1 overflow-auto">
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
