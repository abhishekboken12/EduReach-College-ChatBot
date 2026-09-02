import API from "./api";

// Backend response: { success: true, data: { message: "answer text" } }
// res.data = { success, data: { message } }
// We return res.data.data so ChatDrawer gets { message: "answer text" }
export const sendMessage = async (message: string) => {
  const res = await API.post("/chat/message", { message });
  return res.data.data; // { message: "answer text" }
};