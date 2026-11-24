import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Pilcrow = forwardRef(function Pilcrow(
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
    createElement(Path, {"d":"M13 22L13 2L11.5 2C8.461 2 6 4.461 6 7.5C6 10.539 8.461 13 11.5 13L13 13","key":"0"}),
    createElement(Path, {"d":"M17 2L17 22.102","key":"1"})
  );
});

Pilcrow.displayName = 'Pilcrow';

export default Pilcrow;
export { Pilcrow };
