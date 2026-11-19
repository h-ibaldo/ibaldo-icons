import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatStackBanCornerTooltip = forwardRef(function ChatStackBanCornerTooltip(
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
    createElement(Path, {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L15 2","key":"0"}),
    createElement(Path, {"d":"M2 14L2 15C2 16.656 3.344 18 5 18L7 18L10 22L13 18L15 18C16.656 18 18 16.656 18 15L18 10.234C18 8.863 17.227 7.613 16 7","key":"1"}),
    createElement(Path, {"d":"M12 7C12 9.762 9.762 12 7 12C4.238 12 2 9.762 2 7C2 4.238 4.238 2 7 2C9.762 2 12 4.238 12 7Z","key":"2"}),
    createElement(Path, {"d":"M10.535 3.465L3.465 10.535","key":"3"})
  );
});

ChatStackBanCornerTooltip.displayName = 'ChatStackBanCornerTooltip';

export default ChatStackBanCornerTooltip;
export { ChatStackBanCornerTooltip };
