import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const LinkXBracket = forwardRef(function LinkXBracket(
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
    createElement(Path, {"d":"M9 13L7 13C4.238 13 2 10.762 2 8C2 5.238 4.238 3 7 3L9 3","key":"0"}),
    createElement(Path, {"d":"M15 3L17 3C19.762 3 22 5.238 22 8C22 10.762 19.762 13 17 13L15 13","key":"1"}),
    createElement(Path, {"d":"M8 8L16 8","key":"2"}),
    createElement(Path, {"d":"M18 21L22 17","key":"3"}),
    createElement(Path, {"d":"M18 17L22 21","key":"4"})
  );
});

LinkXBracket.displayName = 'LinkXBracket';

export default LinkXBracket;
export { LinkXBracket };
