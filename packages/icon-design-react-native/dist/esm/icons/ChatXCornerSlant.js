import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatXCornerSlant = forwardRef(function ChatXCornerSlant(
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
    createElement(Path, {"d":"M18 6L22 2","key":"0"}),
    createElement(Path, {"d":"M22 6L18 2","key":"1"}),
    createElement(Path, {"d":"M13 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L8 18L8 22L14 18L19 18C20.656 18 22 16.656 22 15L22 11","key":"2"})
  );
});

ChatXCornerSlant.displayName = 'ChatXCornerSlant';

export default ChatXCornerSlant;
export { ChatXCornerSlant };
