import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const NavigationUpLeftSquare = forwardRef(function NavigationUpLeftSquare(
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
    createElement(Path, {"d":"M16.449 9.93L9.375 8.16C8.641 7.98 7.977 8.641 8.16 9.375L9.93 16.449C10.156 17.352 11.379 17.484 11.797 16.652L13.266 13.711C13.363 13.52 13.52 13.363 13.711 13.266L16.652 11.793C17.484 11.379 17.348 10.156 16.449 9.93Z","key":"0"}),
    createElement(Path, {"d":"M2 5L2 19C2 20.656 3.344 22 5 22L19 22C20.656 22 22 20.656 22 19L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z","key":"1"})
  );
});

NavigationUpLeftSquare.displayName = 'NavigationUpLeftSquare';

export default NavigationUpLeftSquare;
export { NavigationUpLeftSquare };
