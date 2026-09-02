import API from "./api";

// Backend expects: { phoneNumber, preferredCourse }
// Route is protected: POST /api/vapi/call (requires auth token — handled by api.ts interceptor)
export const initiateCall = async (data: { phone: string; course: string; topic: string }) => {
  const res = await API.post("/vapi/call", {
    phoneNumber: data.phone,
    preferredCourse: `${data.course} - ${data.topic}`,
  });
  return res.data;
};