import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const LinkCheckBracket = forwardRef(function LinkCheckBracket(
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
    createElement(Path, {"d":"M9 14L7 14C4.238 14 2 11.762 2 9C2 6.238 4.238 4 7 4L9 4","key":"0"}),
    createElement(Path, {"d":"M15 4L17 4C19.762 4 22 6.238 22 9C22 11.762 19.762 14 17 14L15 14","key":"1"}),
    createElement(Path, {"d":"M8 9L16 9","key":"2"}),
    createElement(Path, {"d":"M16 20L18 22L22 18","key":"3"})
  );
});

LinkCheckBracket.displayName = 'LinkCheckBracket';

export default LinkCheckBracket;
export { LinkCheckBracket };
