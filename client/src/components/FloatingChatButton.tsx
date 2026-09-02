import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import ChatDrawer from "./ChatDrawer";

export default function FloatingChatButton() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [chatOpen, setChatOpen] = useState(false);

  const handleClick = () => {
    if (user) {
      setChatOpen(!chatOpen);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      {/* Chat drawer popup */}
      <ChatDrawer open={chatOpen} onClose={() => setChatOpen(false)} />

      {/* Floating button */}
      <button
        onClick={handleClick}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 ${
          chatOpen ? "bg-gray-600 hover:bg-gray-700" : "bg-maroon hover:bg-maroon-dark"
        }`}
        title={user ? "Chat with EduReach Bot" : "Login to chat"}
      >
        {chatOpen ? (
          <MessageCircle className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white animate-bounce [animation-duration:2s] [animation-iteration-count:3]" />
        )}
      </button>
    </>
  );
}