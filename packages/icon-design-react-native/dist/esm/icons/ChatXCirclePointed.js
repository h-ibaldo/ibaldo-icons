import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatXCirclePointed = forwardRef(function ChatXCirclePointed(
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
    createElement(Path, {"d":"M22 7.5C22 10.535 19.535 13 16.5 13C13.465 13 11 10.535 11 7.5C11 4.465 13.465 2 16.5 2C19.535 2 22 4.465 22 7.5Z","key":"0"}),
    createElement(Path, {"d":"M18 6L15 9","key":"1"}),
    createElement(Path, {"d":"M15 6L18 9","key":"2"}),
    createElement(Path, {"d":"M9 3C5.133 3 2 6.133 2 10C2 13.867 5.133 17 9 17L10 17L10 22L17.68 17.52C18.398 17.102 19.031 16.586 19.59 16","key":"3"})
  );
});

ChatXCirclePointed.displayName = 'ChatXCirclePointed';

export default ChatXCirclePointed;
export { ChatXCirclePointed };
