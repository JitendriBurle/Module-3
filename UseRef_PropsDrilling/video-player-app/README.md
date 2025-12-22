Clicking Play / Pause / Forward / Rewind:

Does NOT change React state
Does NOT change the video source
Still changes the video behavior
This happens because:

The video is controlled using useRef
useRef does not cause re-rendering
This proves that not all UI behavior in React requires state.