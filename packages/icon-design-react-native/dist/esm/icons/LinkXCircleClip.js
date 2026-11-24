import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const LinkXCircleClip = forwardRef(function LinkXCircleClip(
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
    createElement(Path, {"d":"M14.965 8.035C16.344 6.656 16.344 4.418 14.965 3.035C13.586 1.656 11.344 1.656 9.965 3.035L8 5","key":"0"}),
    createElement(Path, {"d":"M5 8L3.035 9.965C1.656 11.348 1.656 13.586 3.035 14.965C4.414 16.348 6.656 16.348 8.035 14.965","key":"1"}),
    createElement(Path, {"d":"M11 7L7 11","key":"2"}),
    createElement(Path, {"d":"M22 16.5C22 19.535 19.539 22 16.5 22C13.461 22 11 19.535 11 16.5C11 13.465 13.461 11 16.5 11C19.539 11 22 13.465 22 16.5Z","key":"3"}),
    createElement(Path, {"d":"M18 15L15 18","key":"4"}),
    createElement(Path, {"d":"M15 15L18 18","key":"5"})
  );
});

LinkXCircleClip.displayName = 'LinkXCircleClip';

export default LinkXCircleClip;
export { LinkXCircleClip };
