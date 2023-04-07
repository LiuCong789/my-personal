import React, { useState, useEffect } from "react";

function TypingEffect({ messages }) {
  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState(messages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % messages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [messages]);

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const typing = setInterval(() => {
        if (i < messages[index].length) {
          setMessage(messages[index].substring(0, i + 1));
          i++;
        } else {
          clearInterval(typing);
        }
      }, 100);
      return () => clearInterval(typing);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [index, messages]);

  return <h1>{message}</h1>;
}

export default TypingEffect;
