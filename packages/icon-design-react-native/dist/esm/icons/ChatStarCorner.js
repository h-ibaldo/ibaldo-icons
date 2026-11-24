import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStarCorner = forwardRef(function ChatStarCorner(
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
    createElement(Path, {"d":"M16.426 2.266L17.785 5.02L20.828 5.461C21.215 5.52 21.371 5.996 21.09 6.27L18.887 8.414L19.41 11.445C19.473 11.832 19.066 12.129 18.719 11.945L16 10.516L13.281 11.945C12.934 12.129 12.523 11.832 12.594 11.445L13.109 8.414L10.91 6.27C10.629 5.996 10.785 5.52 11.176 5.461L14.215 5.02L15.574 2.266C15.75 1.91 16.25 1.91 16.426 2.266Z","key":"0"}),
    createElement(Path, {"d":"M8 3.668C4.469 4.906 2 7.719 2 11C2 13.84 3.855 16.328 6.645 17.75C6.664 18.895 6.391 20.078 5.719 21.113C5.48 21.48 5.766 21.973 6.195 21.898C8.313 21.535 9.781 20.23 10.715 18.926C11.137 18.969 11.563 19 12 19C15.699 19 18.922 17.391 20.652 15","key":"1"})
  );
});

ChatStarCorner.displayName = 'ChatStarCorner';

export default ChatStarCorner;
export { ChatStarCorner };
