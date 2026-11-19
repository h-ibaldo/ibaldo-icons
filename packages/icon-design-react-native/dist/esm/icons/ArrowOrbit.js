import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowOrbit = forwardRef(function ArrowOrbit(
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
    createElement(Path, {"d":"M10 13L13 16L10 19","key":"0"}),
    createElement(Path, {"d":"M12 16C6.477 16 2 13.762 2 11C2 8.238 6.477 6 12 6C17.523 6 22 8.238 22 11C22 12.859 19.973 14.48 16.961 15.344","key":"1"})
  );
});

ArrowOrbit.displayName = 'ArrowOrbit';

export default ArrowOrbit;
export { ArrowOrbit };
