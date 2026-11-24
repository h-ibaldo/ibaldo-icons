import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Scan = forwardRef(function Scan(
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
    createElement(Path, {"d":"M22 17L22 20C22 21.105 21.105 22 20 22L17 22","key":"0"}),
    createElement(Path, {"d":"M2 7L2 4C2 2.895 2.895 2 4 2L7 2","key":"1"}),
    createElement(Path, {"d":"M17 2L20 2C21.105 2 22 2.895 22 4L22 7","key":"2"}),
    createElement(Path, {"d":"M7 22L4 22C2.895 22 2 21.105 2 20L2 17","key":"3"})
  );
});

Scan.displayName = 'Scan';

export default Scan;
export { Scan };
