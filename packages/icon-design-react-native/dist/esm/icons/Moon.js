import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Moon = forwardRef(function Moon(
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
    createElement(Path, {"d":"M3 11C3 6.945 5.414 3.453 8.883 1.883C8.316 3.141 8 4.531 8 6C8 11.523 12.477 16 18 16C19.469 16 20.859 15.684 22.117 15.117C20.547 18.586 17.055 21 13 21C7.477 21 3 16.523 3 11Z","key":"0"})
  );
});

Moon.displayName = 'Moon';

export default Moon;
export { Moon };
