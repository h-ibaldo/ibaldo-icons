import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatRaysSide = forwardRef(function ChatRaysSide(
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
    createElement(Path, {"d":"M7 17L20 17C21.105 17 22 16.105 22 15L22 9C22 7.895 21.105 7 20 7L7 7C5.895 7 5 7.895 5 9L5 10L2 12L5 14L5 15C5 16.105 5.895 17 7 17Z","key":"0"}),
    createElement(Path, {"d":"M13 2L13 4","key":"1"}),
    createElement(Path, {"d":"M5 2L7 4","key":"2"}),
    createElement(Path, {"d":"M21 2L19 4","key":"3"}),
    createElement(Path, {"d":"M13 22L13 20","key":"4"}),
    createElement(Path, {"d":"M21 22L19 20","key":"5"}),
    createElement(Path, {"d":"M5 22L7 20","key":"6"})
  );
});

ChatRaysSide.displayName = 'ChatRaysSide';

export default ChatRaysSide;
export { ChatRaysSide };
