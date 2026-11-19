import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackSettingsBroken = forwardRef(function ChatStackSettingsBroken(
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
    createElement(Path, {"d":"M10 2L5 2C3.344 2 2 3.344 2 5L2 13","key":"0"}),
    createElement(Path, {"d":"M14 22L17 18L19 18C20.656 18 22 16.656 22 15L22 13","key":"1"}),
    createElement(Path, {"d":"M19.098 2L13.902 2L11.305 6.5L13.902 11L19.098 11L21.695 6.5Z","key":"2"}),
    createElement(Path, {"d":"M17.5 6.5C17.5 5.945 17.051 5.5 16.5 5.5C15.949 5.5 15.5 5.945 15.5 6.5C15.5 7.055 15.949 7.5 16.5 7.5C17.051 7.5 17.5 7.055 17.5 6.5Z","key":"3"}),
    createElement(Path, {"d":"M8 6.184C6.836 6.598 6 7.695 6 9L6 15C6 16.656 7.344 18 9 18L11 18","key":"4"})
  );
});

ChatStackSettingsBroken.displayName = 'ChatStackSettingsBroken';

export default ChatStackSettingsBroken;
export { ChatStackSettingsBroken };
