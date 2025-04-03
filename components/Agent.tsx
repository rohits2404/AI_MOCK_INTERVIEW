"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

enum CallStatus {
    INACTIVE = "INACTIVE",
    CONNECTING = "CONNECTING",
    ACTIVE = "ACTIVE",
    FINISHED = "FINISHED",
};

interface SavedMessage {
    role: "user" | "system" | "assistant";
    content: string;
};

const Agent = ({ userName }:AgentProps) => {

    const router = useRouter();

    const [isSpeaking, setIsSpeaking] = useState(false);
    const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
    
    const messages = [
        "Whats Your Name?",
        "My Name Is Rohit Sharma, Nice To Meet You!"
    ]

    const lastMessage = messages[messages.length-1];

    return (
        <>
            <div className="call-view">
                {/* AI Interviewer Card */}
                <div className="card-interviewer">
                    <div className='avatar'>
                        <Image
                        src="/ai-avatar.png"
                        alt="profile-image"
                        width={65}
                        height={54}
                        className="object-cover"
                        />
                        {isSpeaking && <span className="animate-speak" />}
                    </div>
                    <h3>AI Interviewer</h3>
                </div>
                {/* User Profile Card */}
                <div className="card-border">
                    <div className="card-content">
                        <Image
                        src="/user-avatar.png"
                        alt="profile-image"
                        width={539}
                        height={539}
                        className="rounded-full object-cover size-[120px]"
                        />
                        <h3>{userName}</h3>
                    </div>
                </div>
            </div>
            {messages.length > 0 && (
                <div className="transcript-border">
                    <div className="transcript">
                        <p
                        key={lastMessage}
                        className={cn(
                            "transition-opacity duration-500 opacity-0",
                            "animate-fadeIn opacity-100"
                        )}
                        >
                            {lastMessage}
                        </p>
                    </div>
                </div>
            )}
            <div className="w-full flex justify-center">
                {callStatus !== "ACTIVE" ? (
                    <button className="relative btn-call">
                        <span
                        className={cn(
                            "absolute animate-ping rounded-full opacity-75",
                            callStatus !== "CONNECTING" && "hidden"
                        )}
                        />

                        <span className="relative">
                        {callStatus === "INACTIVE" || callStatus === "FINISHED"
                            ? "Call"
                            : ". . ."}
                        </span>
                    </button>
                    ) : (
                    <button className="btn-disconnect">
                        End
                    </button>
                )}
            </div>
        </>
    )
}

export default Agent;