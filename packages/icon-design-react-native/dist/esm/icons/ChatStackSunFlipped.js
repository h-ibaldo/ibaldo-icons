import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackSunFlipped = forwardRef(function ChatStackSunFlipped(
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
    createElement(Path, {"d":"M22 15L22 17C22 18.105 21.105 19 20 19L19 19L19 22L14 19L7 19","key":"0"}),
    createElement(Path, {"d":"M8 4L5 2L5 5L4 5C2.895 5 2 5.895 2 7L2 13C2 14.105 2.895 15 4 15L12 15","key":"1"}),
    createElement(Path, {"d":"M16 12C13.789 12 12 10.211 12 8C12 5.789 13.789 4 16 4C18.211 4 20 5.789 20 8C20 10.211 18.211 12 16 12Z","key":"2"}),
    createElement(Path, {"d":"M16 2L16 4","key":"3"}),
    createElement(Path, {"d":"M16 12L16 14","key":"4"}),
    createElement(Path, {"d":"M21.195 5L19.465 6","key":"5"}),
    createElement(Path, {"d":"M12.535 10L10.805 11","key":"6"}),
    createElement(Path, {"d":"M21.195 11L19.465 10","key":"7"}),
    createElement(Path, {"d":"M12.535 6L10.805 5","key":"8"})
  );
});

ChatStackSunFlipped.displayName = 'ChatStackSunFlipped';

export default ChatStackSunFlipped;
export { ChatStackSunFlipped };
