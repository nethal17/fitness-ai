"use client";
import { vapi } from "@/lib/vapi";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const GenerateProgramPage = () => {
  const [callActive, setCallActive] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [messages, setMessages] = useState([]);
  const [callEnded, setCallEnded] = useState(false);

  const { user } = useUser();
  const router = useRouter();

  const messageContainerRef = useRef<HTMLDivElement>(null);

  // scroll to bottom when messages change
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]); 

  // navigate user to profile page after call ends
  useEffect(() => {
    if (callEnded) {
      const redirectTimer = setTimeout(() => {
        router.push("/profile");
      }, 1500);

      return () => clearTimeout(redirectTimer);
    }
  }, [callEnded, router]);

  // setup event listner
  useEffect(() => {
    const handleCallStart = () => {
      console.log("Call Started");
      setCallActive(true);
      setConnecting(false);
      setCallEnded(false);
    };

    const handleCallEnd = () => {
      console.log("Call Ended");
      setCallActive(false);
      setConnecting(false);
      setIsSpeaking(false);
      setCallEnded(true);
    };

    const handleSpeechStart = () => {
      console.log("AI started speaking");
      setIsSpeaking(true);
    };

    const handleSpeechEnd = () => {
      console.log("AI stopped speaking");
      setIsSpeaking(false);
    };

    const handleMessageReceived = (message: any) => {}

    const handleError = (error: any) => {
      console.log("Vapi Error", error);
      setConnecting(false);
      setCallActive(false);
    };

    vapi.on("call-start", handleCallStart)
        .on("call-end", handleCallEnd)
        .on("speech-start", handleSpeechStart)
        .on("speech-end", handleSpeechEnd)
        .on("message", handleMessageReceived)
        .on("error", handleError)
    
    // cleanup event listeners on unmount
    return () =>  {
      vapi.off("call-start", handleCallStart)
          .off("call-end", handleCallEnd)
          .off("speech-start", handleSpeechStart)
          .off("speech-end", handleSpeechEnd)
          .off("message", handleMessageReceived)
          .off("error", handleError);
    }

  }, []);

  const toggleCall = async () => {
    if (callActive) vapi.stop();
    else {
      try {
        setConnecting(true);
        setMessages([]);
        setCallEnded(false);

        const fullName = user?.fullName
          ? `${user.firstName} ${user.lastName || ""}`.trim()
          : "There";

        await vapi.start(process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID, {
          variableValues: {
            full_name: fullName,
          },
        });
      } catch (error) {
        console.error("Error starting call:", error);
        setConnecting(false);
      }
    }
  }

  return (
    <div>GenerateProgramPage</div>
  );
};

export default GenerateProgramPage;