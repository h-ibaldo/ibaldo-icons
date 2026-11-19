import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatPlusCirclePointed = forwardRef(function ChatPlusCirclePointed(
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
    createElement(Path, {"d":"M22 7C22 9.762 19.762 12 17 12C14.238 12 12 9.762 12 7C12 4.238 14.238 2 17 2C19.762 2 22 4.238 22 7Z","key":"0"}),
    createElement(Path, {"d":"M17 5L17 9","key":"1"}),
    createElement(Path, {"d":"M19 7L15 7","key":"2"}),
    createElement(Path, {"d":"M10 3L9 3C5.133 3 2 6.133 2 10C2 13.867 5.133 17 9 17L10 17L10 22L17.68 17.52C19.129 16.676 20.262 15.438 21.008 14","key":"3"})
  );
});

ChatPlusCirclePointed.displayName = 'ChatPlusCirclePointed';

export default ChatPlusCirclePointed;
export { ChatPlusCirclePointed };
