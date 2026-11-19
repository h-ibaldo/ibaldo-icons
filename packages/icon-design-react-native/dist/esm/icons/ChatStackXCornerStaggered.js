import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackXCornerStaggered = forwardRef(function ChatStackXCornerStaggered(
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
    createElement(Path, {"d":"M16 6L20 2","key":"0"}),
    createElement(Path, {"d":"M20 6L16 2","key":"1"}),
    createElement(Path, {"d":"M12 2L6 2C4.895 2 4 2.895 4 4L4 7L2 10L16 10C16.738 10 17.375 9.598 17.723 9","key":"2"}),
    createElement(Path, {"d":"M6 22L20 22C21.105 22 22 21.105 22 20L22 16C22 14.895 21.105 14 20 14L10 14C8.895 14 8 14.895 8 16L8 19Z","key":"3"})
  );
});

ChatStackXCornerStaggered.displayName = 'ChatStackXCornerStaggered';

export default ChatStackXCornerStaggered;
export { ChatStackXCornerStaggered };
