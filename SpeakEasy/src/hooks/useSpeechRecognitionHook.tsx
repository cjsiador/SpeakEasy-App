import React, { MutableRefObject, useEffect, useRef, useState } from "react";

const useSpeechToText = () => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState("");
    // const recognitionRef = useRef<SpeechRecognition>(null);
    const recognitionRef = useRef() as MutableRefObject<SpeechRecognition>;

    useEffect(() => {
        if(!('webkitSpeechRecognition' in window)) {
            console.error("Web speech api is not supported.")
            return;
        }

        recognitionRef.current = new window.webkitSpeechRecognition();
        recognitionRef.current.interimResults = true;
        recognitionRef.current.lang = "en-US";
        recognitionRef.current.continuous = true; 
        
        recognitionRef.current.onresult = (event) => {
            let text = "";
            for (let i = 0; i < event.results.length; i++) {
                text += event.results[i][0].transcript;
            }
    
            setTranscript(text);
        }

        recognitionRef.current.onerror = (event) => {
            console.error("Speech Recognition Error: ", event.error);
        }

        recognitionRef.current.onend = () => {
            setIsListening(false);
            setTranscript("");
        }

        return () => {
            recognitionRef.current.stop();
        }
    }, [])

    const startListening = () => {
        if(recognitionRef.current && !isListening) {
            recognitionRef.current.start();
            setIsListening(true);
        }
    }

    const stopListening = () => {
        if(recognitionRef.current && isListening) {
            recognitionRef.current.stop();
            setIsListening(false);
        }
    }

    return {
        isListening,
        transcript,
        startListening,
        stopListening
    }

};

export default useSpeechToText;