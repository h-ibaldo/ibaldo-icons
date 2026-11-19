import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackSettingsFlipped = forwardRef(function ChatStackSettingsFlipped(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Path, {"d":"M22 14L22 17C22 18.105 21.105 19 20 19L19 19L19 22L14 19L7 19","key":"0"}),
    createElement(Path, {"d":"M19.098 2L13.902 2L11.305 6.5L13.902 11L19.098 11L21.695 6.5Z","key":"1"}),
    createElement(Path, {"d":"M17.5 6.5C17.5 5.945 17.051 5.5 16.5 5.5C15.949 5.5 15.5 5.945 15.5 6.5C15.5 7.055 15.949 7.5 16.5 7.5C17.051 7.5 17.5 7.055 17.5 6.5Z","key":"2"}),
    createElement(Path, {"d":"M8 3.801L5 2L5 5L4 5C2.895 5 2 5.895 2 7L2 13C2 14.105 2.895 15 4 15L16 15","key":"3"})
  );
});

ChatStackSettingsFlipped.displayName = 'ChatStackSettingsFlipped';

export default ChatStackSettingsFlipped;
export { ChatStackSettingsFlipped };
