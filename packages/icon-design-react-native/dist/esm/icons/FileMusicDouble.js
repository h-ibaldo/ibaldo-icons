import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileMusicDouble = forwardRef(function FileMusicDouble(
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
    createElement(Path, {"d":"M21 13L14 14L14 21","key":"0"}),
    createElement(Path, {"d":"M14 21C14 21.551 13.328 22 12.5 22C11.672 22 11 21.551 11 21C11 20.449 11.672 20 12.5 20C13.328 20 14 20.449 14 21Z","key":"1"}),
    createElement(Path, {"d":"M21 13L21 20","key":"2"}),
    createElement(Path, {"d":"M21 20C21 20.551 20.328 21 19.5 21C18.672 21 18 20.551 18 20C18 19.449 18.672 19 19.5 19C20.328 19 21 19.449 21 20Z","key":"3"}),
    createElement(Path, {"d":"M8 22L6 22C4.895 22 4 21.105 4 20L4 4C4 2.895 4.895 2 6 2L14.016 2C14.645 2 15.25 2.25 15.695 2.695L19.305 6.305C19.75 6.75 20 7.355 20 7.984L20 10","key":"4"}),
    createElement(Path, {"d":"M14 2L14 7C14 7.551 14.449 8 15 8L20 8","key":"5"})
  );
});

FileMusicDouble.displayName = 'FileMusicDouble';

export default FileMusicDouble;
export { FileMusicDouble };
