import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const EjectDownThick = forwardRef(function EjectDownThick(
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
    createElement(Path, {"d":"M19.652 11L4.348 11C3.199 11 2.598 12.359 3.367 13.207L10.871 21.5C11.477 22.168 12.523 22.168 13.125 21.5L20.633 13.207C21.402 12.359 20.801 11 19.652 11Z","key":"0"}),
    createElement(Path, {"d":"M3 3L3 5C3 5.551 3.449 6 4 6L20 6C20.551 6 21 5.551 21 5L21 3C21 2.449 20.551 2 20 2L4 2C3.449 2 3 2.449 3 3Z","key":"1"})
  );
});

EjectDownThick.displayName = 'EjectDownThick';

export default EjectDownThick;
export { EjectDownThick };
