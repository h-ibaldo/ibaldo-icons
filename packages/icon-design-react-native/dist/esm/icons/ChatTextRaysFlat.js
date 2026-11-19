import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatTextRaysFlat = forwardRef(function ChatTextRaysFlat(
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
    createElement(Path, {"d":"M13 2L13 3","key":"0"}),
    createElement(Path, {"d":"M7 2L8 3","key":"1"}),
    createElement(Path, {"d":"M19 2L18 3","key":"2"}),
    createElement(Path, {"d":"M13 22L13 21","key":"3"}),
    createElement(Path, {"d":"M19 22L18 21","key":"4"}),
    createElement(Path, {"d":"M7 22L8 21","key":"5"}),
    createElement(Path, {"d":"M20 18C21.105 18 22 17.105 22 16L22 8C22 6.895 21.105 6 20 6L7 6C5.895 6 5 6.895 5 8L5 14L2 18Z","key":"6"}),
    createElement(Path, {"d":"M9 10L18 10","key":"7"}),
    createElement(Path, {"d":"M9 14L15 14","key":"8"})
  );
});

ChatTextRaysFlat.displayName = 'ChatTextRaysFlat';

export default ChatTextRaysFlat;
export { ChatTextRaysFlat };
