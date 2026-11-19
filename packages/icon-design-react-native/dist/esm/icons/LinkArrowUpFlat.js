import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const LinkArrowUpFlat = forwardRef(function LinkArrowUpFlat(
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
    createElement(Path, {"d":"M6.5 13C4.016 13 2 15.016 2 17.5C2 19.984 4.016 22 6.5 22L10.5 22C12.984 22 15 19.984 15 17.5C15 17.328 14.973 17.164 14.949 17","key":"0"}),
    createElement(Path, {"d":"M17.5 22C19.984 22 22 19.984 22 17.5C22 15.016 19.984 13 17.5 13L13.5 13C11.016 13 9 15.016 9 17.5C9 17.672 9.027 17.836 9.051 18","key":"1"}),
    createElement(Path, {"d":"M22 5L19 2L16 5","key":"2"}),
    createElement(Path, {"d":"M19 9L19 2","key":"3"})
  );
});

LinkArrowUpFlat.displayName = 'LinkArrowUpFlat';

export default LinkArrowUpFlat;
export { LinkArrowUpFlat };
