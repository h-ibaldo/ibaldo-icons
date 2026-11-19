import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackXDoubleFlipped = forwardRef(function ChatStackXDoubleFlipped(
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
    createElement(Path, {"d":"M6 11L8 9","key":"0"}),
    createElement(Path, {"d":"M8 11L6 9","key":"1"}),
    createElement(Path, {"d":"M12 11L14 9","key":"2"}),
    createElement(Path, {"d":"M14 11L12 9","key":"3"}),
    createElement(Path, {"d":"M2 13L2 7C2 5.895 2.895 5 4 5L5 5L5 2L10 5L16 5C17.105 5 18 5.895 18 7L18 13C18 14.105 17.105 15 16 15L4 15C2.895 15 2 14.105 2 13Z","key":"4"}),
    createElement(Path, {"d":"M22 11L22 17C22 18.105 21.105 19 20 19L19 19L19 22L14 19L7 19","key":"5"})
  );
});

ChatStackXDoubleFlipped.displayName = 'ChatStackXDoubleFlipped';

export default ChatStackXDoubleFlipped;
export { ChatStackXDoubleFlipped };
