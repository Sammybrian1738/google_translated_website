import React from "react";

const SpeechTest = () => {
  const handleClick = () => {
    if (window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance("Hello, this is a test.");
      utterance.rate = 0.9;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;
      window.speechSynthesis.speak(utterance);
    } else {
      console.error("Speech Synthesis API not supported.");
    }
  };

  return <button onClick={handleClick}>Test Speech Synthesis</button>;
};

export default SpeechTest;
