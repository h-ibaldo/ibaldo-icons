import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackHash = forwardRef(function ChatStackHash(
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
    createElement(Path, {"d":"M16 9C16 5.688 12.867 3 9 3C5.133 3 2 5.688 2 9C2 10.914 3.051 12.617 4.684 13.719C4.309 15.242 3.656 16.344 3 17C5.617 17 7.789 16.141 9.27 14.988C13.012 14.863 16 12.234 16 9Z","key":"0"}),
    createElement(Path, {"d":"M8.613 15.445C9.672 17.469 12 18.898 14.73 18.988C16.211 20.141 18.383 21 21 21C20.34 20.34 19.691 19.242 19.316 17.715C20.949 16.617 22 14.918 22 13C22 9.859 19.188 7.289 15.605 7.027","key":"1"}),
    createElement(Path, {"d":"M7.5 6L6.75 12","key":"2"}),
    createElement(Path, {"d":"M11.25 6L10.5 12","key":"3"}),
    createElement(Path, {"d":"M6 7.355L12 7.355","key":"4"}),
    createElement(Path, {"d":"M6 10.645L12 10.645","key":"5"})
  );
});

ChatStackHash.displayName = 'ChatStackHash';

export default ChatStackHash;
export { ChatStackHash };
