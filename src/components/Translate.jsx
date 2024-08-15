import React, { useEffect, useRef } from "react";

const Translate = () => {
  const googleTranslateRef = useRef(null);

  useEffect(() => {
    // Define the callback function globally
    window.loadGoogleTranslate = () => {
      if (
        window.google &&
        window.google.translate &&
        window.google.translate.TranslateElement
      ) {
        // Check if the Google Translate widget is already initialized
        if (!googleTranslateRef.current.querySelector(".skiptranslate")) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,ja,fr,sw",
              layout:
                window.google.translate.TranslateElement.InlineLayout.VERTICAL,
            },
            googleTranslateRef.current
          );
        }
      } else {
        console.error("Google Translate API not loaded.");
      }
    };

    // Check if the script already exists
    if (
      !document.querySelector(
        'script[src="https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate"]'
      )
    ) {
      // Create script element and append it to the body
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate";
      script.async = true;
      script.onload = () => {
        console.log("Google Translate script loaded.");
      };
      script.onerror = () => {
        console.error("Failed to load Google Translate script.");
      };
      document.body.appendChild(script);
    }

    // Cleanup function to remove the script
    return () => {
      // Clean up global function
      delete window.loadGoogleTranslate;
    };
  }, []);

  return (
    <div>
      <div ref={googleTranslateRef}></div>
    </div>
  );
};

export default Translate;
