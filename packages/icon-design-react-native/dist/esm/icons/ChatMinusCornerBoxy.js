import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatMinusCornerBoxy = forwardRef(function ChatMinusCornerBoxy(
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
    createElement(Path, {"d":"M12 2L5 2C3.344 2 2 3.344 2 5L2 22L7 18L19 18C20.656 18 22 16.656 22 15L22 10","key":"0"}),
    createElement(Path, {"d":"M22 5L16 5","key":"1"})
  );
});

ChatMinusCornerBoxy.displayName = 'ChatMinusCornerBoxy';

export default ChatMinusCornerBoxy;
export { ChatMinusCornerBoxy };
