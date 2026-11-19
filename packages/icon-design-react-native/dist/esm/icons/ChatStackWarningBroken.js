import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackWarningBroken = forwardRef(function ChatStackWarningBroken(
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
    createElement(Path, {"d":"M10 2L5 2C3.344 2 2 3.344 2 5L2 13","key":"0"}),
    createElement(Path, {"d":"M14.27 3.004L10.402 9.699C9.559 11.168 10.617 13 12.309 13L19.691 13C21.383 13 22.441 11.168 21.598 9.699L17.734 3.004C16.961 1.668 15.039 1.668 14.27 3.004Z","key":"1"}),
    createElement(Path, {"d":"M16 7L16 6","key":"2"}),
    createElement(Path, {"d":"M16 10L16 10","key":"3"}),
    createElement(Path, {"d":"M14 22L17 18L19 18C20.305 18 21.402 17.16 21.816 16","key":"4"}),
    createElement(Path, {"d":"M8 6.184C6.836 6.598 6 7.695 6 9L6 15C6 16.656 7.344 18 9 18L11 18","key":"5"})
  );
});

ChatStackWarningBroken.displayName = 'ChatStackWarningBroken';

export default ChatStackWarningBroken;
export { ChatStackWarningBroken };
