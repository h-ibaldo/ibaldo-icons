import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatBanSlant = forwardRef(function ChatBanSlant(
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
    createElement(Path, {"d":"M2 5L2 15C2 16.656 3.344 18 5 18L8 18L8 22L14 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z","key":"0"}),
    createElement(Path, {"d":"M17 10C17 12.762 14.762 15 12 15C9.238 15 7 12.762 7 10C7 7.238 9.238 5 12 5C14.762 5 17 7.238 17 10Z","key":"1"}),
    createElement(Path, {"d":"M15.535 6.465L8.465 13.535","key":"2"})
  );
});

ChatBanSlant.displayName = 'ChatBanSlant';

export default ChatBanSlant;
export { ChatBanSlant };
