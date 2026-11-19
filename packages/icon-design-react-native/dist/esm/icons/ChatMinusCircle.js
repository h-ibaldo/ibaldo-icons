import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatMinusCircle = forwardRef(function ChatMinusCircle(
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
    createElement(Path, {"d":"M13.855 3.145C13.254 3.055 12.633 3 12 3C6.477 3 2 6.582 2 11C2 13.84 3.855 16.328 6.645 17.75C6.664 18.895 6.391 20.082 5.719 21.113C5.48 21.48 5.762 21.973 6.195 21.898C8.313 21.535 9.781 20.23 10.715 18.926C11.137 18.969 11.563 19 12 19C17.523 19 22 15.418 22 11C22 10.262 21.867 9.551 21.629 8.871","key":"1"}),
    createElement(Path, {"d":"M15 7L19 7","key":"2"})
  );
});

ChatMinusCircle.displayName = 'ChatMinusCircle';

export default ChatMinusCircle;
export { ChatMinusCircle };
