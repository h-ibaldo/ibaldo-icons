import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const EjectThick = forwardRef(function EjectThick(
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
    createElement(Path, {"d":"M4.348 13L19.652 13C20.801 13 21.402 11.641 20.633 10.793L13.129 2.5C12.523 1.832 11.477 1.832 10.875 2.5L3.367 10.793C2.598 11.641 3.199 13 4.348 13Z","key":"0"}),
    createElement(Path, {"d":"M21 21L21 19C21 18.449 20.551 18 20 18L4 18C3.449 18 3 18.449 3 19L3 21C3 21.551 3.449 22 4 22L20 22C20.551 22 21 21.551 21 21Z","key":"1"})
  );
});

EjectThick.displayName = 'EjectThick';

export default EjectThick;
export { EjectThick };
