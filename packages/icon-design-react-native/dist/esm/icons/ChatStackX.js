import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackX = forwardRef(function ChatStackX(
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
    createElement(Path, {"d":"M16 8.973C16 5.66 12.867 2.973 9 2.973C5.133 2.973 2 5.66 2 8.973C2 10.891 3.051 12.59 4.684 13.691C4.309 15.215 3.656 16.316 3 16.973C5.617 16.973 7.789 16.113 9.27 14.961C13.012 14.84 16 12.207 16 8.973Z","key":"0"}),
    createElement(Path, {"d":"M8.613 15.418C9.672 17.441 12 18.871 14.73 18.961C16.211 20.113 18.383 20.973 21 20.973C20.34 20.316 19.691 19.215 19.316 17.691C20.949 16.594 22 14.891 22 12.973C22 9.836 19.188 7.262 15.605 7","key":"1"}),
    createElement(Path, {"d":"M7 11L11 7","key":"2"}),
    createElement(Path, {"d":"M11 11L7 7","key":"3"})
  );
});

ChatStackX.displayName = 'ChatStackX';

export default ChatStackX;
export { ChatStackX };
