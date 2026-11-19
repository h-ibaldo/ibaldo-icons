import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackSunLayered = forwardRef(function ChatStackSunLayered(
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
    createElement(Path, {"d":"M15.195 20C12.988 20 11.195 18.211 11.195 16C11.195 13.789 12.988 12 15.195 12C17.406 12 19.195 13.789 19.195 16C19.195 18.211 17.406 20 15.195 20Z","key":"0"}),
    createElement(Path, {"d":"M15.195 10L15.195 12","key":"1"}),
    createElement(Path, {"d":"M15.195 20L15.195 22","key":"2"}),
    createElement(Path, {"d":"M20.395 13L18.66 14","key":"3"}),
    createElement(Path, {"d":"M11.73 18L10 19","key":"4"}),
    createElement(Path, {"d":"M20.395 19L18.66 18","key":"5"}),
    createElement(Path, {"d":"M11.73 14L10 13","key":"6"}),
    createElement(Path, {"d":"M5 6L5 5C5 3.344 6.344 2 8 2L19 2C20.656 2 22 3.344 22 5L22 9","key":"7"}),
    createElement(Path, {"d":"M18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9L2 22L7 18","key":"8"})
  );
});

ChatStackSunLayered.displayName = 'ChatStackSunLayered';

export default ChatStackSunLayered;
export { ChatStackSunLayered };
