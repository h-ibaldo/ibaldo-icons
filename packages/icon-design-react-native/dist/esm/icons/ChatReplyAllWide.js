import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatReplyAllWide = forwardRef(function ChatReplyAllWide(
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
    createElement(Path, {"d":"M15 3L9 3C5.133 3 2 6.133 2 10C2 13.172 4.109 15.848 7 16.707L7 21L11.57 17L15 17C18.867 17 22 13.867 22 10C22 6.133 18.867 3 15 3Z","key":"0"}),
    createElement(Path, {"d":"M13.023 11L11.023 9L13.023 7","key":"1"}),
    createElement(Path, {"d":"M9.023 11L7.023 9L9.023 7","key":"2"}),
    createElement(Path, {"d":"M11.023 9L14.023 9C15.68 9 17.023 10.344 17.023 12","key":"3"})
  );
});

ChatReplyAllWide.displayName = 'ChatReplyAllWide';

export default ChatReplyAllWide;
export { ChatReplyAllWide };
