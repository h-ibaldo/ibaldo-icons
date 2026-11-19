import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackBanCornerLayered = forwardRef(function ChatStackBanCornerLayered(
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
    createElement(Path, {"d":"M12 18L7 18L2 22L2 9C2 7.344 3.344 6 5 6L15 6C16.656 6 18 7.344 18 9L18 11","key":"0"}),
    createElement(Path, {"d":"M5 6L5 5C5 3.344 6.344 2 8 2L19 2C20.656 2 22 3.344 22 5L22 17","key":"1"}),
    createElement(Path, {"d":"M22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17Z","key":"2"}),
    createElement(Path, {"d":"M20.535 13.465L13.465 20.535","key":"3"})
  );
});

ChatStackBanCornerLayered.displayName = 'ChatStackBanCornerLayered';

export default ChatStackBanCornerLayered;
export { ChatStackBanCornerLayered };
