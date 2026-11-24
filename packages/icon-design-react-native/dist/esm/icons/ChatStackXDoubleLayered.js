import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackXDoubleLayered = forwardRef(function ChatStackXDoubleLayered(
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
    createElement(Path, {"d":"M2 9L2 22L7 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9Z","key":"0"}),
    createElement(Path, {"d":"M5 6L5 5C5 3.344 6.344 2 8 2L19 2C20.656 2 22 3.344 22 5L22 11C22 12.656 20.656 14 19 14L18 14","key":"1"}),
    createElement(Path, {"d":"M6 13L8 11","key":"2"}),
    createElement(Path, {"d":"M8 13L6 11","key":"3"}),
    createElement(Path, {"d":"M12 13L14 11","key":"4"}),
    createElement(Path, {"d":"M14 13L12 11","key":"5"})
  );
});

ChatStackXDoubleLayered.displayName = 'ChatStackXDoubleLayered';

export default ChatStackXDoubleLayered;
export { ChatStackXDoubleLayered };
