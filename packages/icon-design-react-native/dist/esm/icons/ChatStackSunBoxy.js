import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackSunBoxy = forwardRef(function ChatStackSunBoxy(
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
    createElement(Path, {"d":"M22 9L22 5C22 3.344 20.656 2 19 2L7 2","key":"0"}),
    createElement(Path, {"d":"M16 20C13.789 20 12 18.211 12 16C12 13.789 13.789 12 16 12C18.211 12 20 13.789 20 16C20 18.211 18.211 20 16 20Z","key":"1"}),
    createElement(Path, {"d":"M16 10L16 12","key":"2"}),
    createElement(Path, {"d":"M16 20L16 22","key":"3"}),
    createElement(Path, {"d":"M21.195 13L19.465 14","key":"4"}),
    createElement(Path, {"d":"M12.535 18L10.805 19","key":"5"}),
    createElement(Path, {"d":"M21.195 19L19.465 18","key":"6"}),
    createElement(Path, {"d":"M12.535 14L10.805 13","key":"7"}),
    createElement(Path, {"d":"M17.223 7C16.672 6.391 15.883 6 15 6L5 6C3.344 6 2 7.344 2 9L2 22L7 18","key":"8"})
  );
});

ChatStackSunBoxy.displayName = 'ChatStackSunBoxy';

export default ChatStackSunBoxy;
export { ChatStackSunBoxy };
