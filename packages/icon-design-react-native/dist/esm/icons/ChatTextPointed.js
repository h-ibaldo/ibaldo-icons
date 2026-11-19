import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatTextPointed = forwardRef(function ChatTextPointed(
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
    createElement(Path, {"d":"M17.68 17.52L10 22L10 17L9 17C5.133 17 2 13.867 2 10C2 6.133 5.133 3 9 3L15 3C18.867 3 22 6.133 22 10C22 13.094 20.355 15.957 17.68 17.52Z","key":"0"}),
    createElement(Path, {"d":"M8 8L16 8","key":"1"}),
    createElement(Path, {"d":"M8 12L14 12","key":"2"})
  );
});

ChatTextPointed.displayName = 'ChatTextPointed';

export default ChatTextPointed;
export { ChatTextPointed };
