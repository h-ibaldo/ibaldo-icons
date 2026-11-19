import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const LinkBrokenBracket = forwardRef(function LinkBrokenBracket(
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
    createElement(Path, {"d":"M10.805 17.656L8.684 19.777C7.121 21.34 4.586 21.34 3.023 19.777C1.465 18.215 1.465 15.684 3.023 14.121L5.145 12","key":"0"}),
    createElement(Path, {"d":"M15 8L18 8C20.211 8 22 9.789 22 12C22 14.211 20.211 16 18 16L15 16","key":"1"}),
    createElement(Path, {"d":"M3.07 7.336L4.957 8","key":"2"}),
    createElement(Path, {"d":"M12 3.063L11.336 4.949","key":"3"}),
    createElement(Path, {"d":"M6.473 2.977L7.336 4.781","key":"4"})
  );
});

LinkBrokenBracket.displayName = 'LinkBrokenBracket';

export default LinkBrokenBracket;
export { LinkBrokenBracket };
