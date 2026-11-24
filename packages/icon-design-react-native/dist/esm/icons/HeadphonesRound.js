import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const HeadphonesRound = forwardRef(function HeadphonesRound(
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
    createElement(Path, {"d":"M18.598 5.121L17.234 6.488C16.828 6.895 16.141 6.887 15.664 6.469C14.613 5.555 13.238 5 11.734 5C10.266 5 8.914 5.531 7.875 6.414C7.371 6.836 6.66 6.82 6.262 6.379L5 4.977","key":"0"}),
    createElement(Path, {"d":"M2 13L4 13C5.656 13 7 14.344 7 16L7 21C7 21.551 6.551 22 6 22C2 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 22 22 18 22C17.449 22 17 21.551 17 21L17 16C17 14.344 18.344 13 20 13L22 13","key":"1"})
  );
});

HeadphonesRound.displayName = 'HeadphonesRound';

export default HeadphonesRound;
export { HeadphonesRound };
