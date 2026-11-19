import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const LinkImageSlanted = forwardRef(function LinkImageSlanted(
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
    createElement(Path, {"d":"M22 19.949C22 21.082 21.082 22 19.949 22","key":"0"}),
    createElement(Path, {"d":"M19.789 22L13.211 22C11.988 22 11 21.012 11 19.789L11 13.211C11 11.988 11.988 11 13.211 11L19.789 11C21.012 11 22 11.988 22 13.211L22 19.789C22 21.012 21.012 22 19.789 22Z","key":"1"}),
    createElement(Path, {"d":"M16 22C16 18.688 18.688 16 22 16","key":"2"}),
    createElement(Path, {"d":"M15 15L15 15","key":"3"}),
    createElement(Path, {"d":"M11 8L12.172 6.828C13.277 5.723 13.277 3.934 12.172 2.828C11.066 1.723 9.277 1.723 8.172 2.828L7 4","key":"4"}),
    createElement(Path, {"d":"M4 7L2.828 8.172C1.723 9.277 1.723 11.066 2.828 12.172C3.934 13.277 5.723 13.277 6.828 12.172L8 11","key":"5"}),
    createElement(Path, {"d":"M9 6L6 9","key":"6"})
  );
});

LinkImageSlanted.displayName = 'LinkImageSlanted';

export default LinkImageSlanted;
export { LinkImageSlanted };
