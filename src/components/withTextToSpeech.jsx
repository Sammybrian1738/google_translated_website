import React from "react";

const withTextToSpeech = (WrappedComponent) => {
  return ({ children, ...props }) => {
    const handleMouseEnter = () => {
      console.log("Mouse entered"); // Check if this is logged

      const extractText = (child) => {
        if (typeof child === "string") return child;
        if (React.isValidElement(child) && child.props.children) {
          return React.Children.toArray(child.props.children)
            .map(extractText)
            .join(" ");
        }
        return "";
      };

      const text = extractText(children); // Use simplified extraction

      console.log("Extracted text:", text); // Check the extracted text

      if (window.speechSynthesis && text) {
        console.log("am here trying to talk");
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;
        window.speechSynthesis.speak(utterance);
      }
    };

    const handleMouseLeave = () => {
      console.log("Mouse left"); // Check if this is logged
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };

    return (
      <WrappedComponent
        {...props}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: "pointer" }}
      >
        {children}
      </WrappedComponent>
    );
  };
};

export default withTextToSpeech;
