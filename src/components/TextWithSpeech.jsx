import React from "react";
import withTextToSpeech from "./withTextToSpeech"; // Adjust the path as needed

const TextWithSpeech = withTextToSpeech(({ children, ...rest }) => (
  <div {...rest}>{children}</div>
));

export default TextWithSpeech;
