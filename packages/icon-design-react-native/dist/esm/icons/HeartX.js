import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const HeartX = forwardRef(function HeartX(
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
    createElement(Path, {"d":"M16 16L20 20M20 16L16 20","key":"0"}),
    createElement(Path, {"d":"M21.082 12.254C21.215 12.051 21.34 11.848 21.441 11.652C22.395 9.75 22.113 7.461 20.727 5.848C18.723 3.508 15.152 3.371 12.977 5.547L12.012 6.512L12.012 6.539L11.988 6.512L11.023 5.547C8.848 3.371 5.277 3.508 3.273 5.848C1.887 7.461 1.605 9.75 2.559 11.652C4.512 15.414 11.988 20.512 11.988 20.512L12 20.492","key":"1"})
  );
});

HeartX.displayName = 'HeartX';

export default HeartX;
export { HeartX };
