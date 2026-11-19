import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const LinkSquareClip = forwardRef(function LinkSquareClip(
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
    createElement(Path, {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z","key":"0"}),
    createElement(Path, {"d":"M15 13L16.172 11.828C17.277 10.723 17.277 8.934 16.172 7.828C15.066 6.723 13.277 6.723 12.172 7.828L11 9","key":"1"}),
    createElement(Path, {"d":"M9 11L7.828 12.172C6.723 13.277 6.723 15.066 7.828 16.172C8.934 17.277 10.723 17.277 11.828 16.172L13 15","key":"2"}),
    createElement(Path, {"d":"M13 11L11 13","key":"3"})
  );
});

LinkSquareClip.displayName = 'LinkSquareClip';

export default LinkSquareClip;
export { LinkSquareClip };
