import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const DockCornerOff = forwardRef(function DockCornerOff(
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
    createElement(Path, {"d":"M15 16L9 16","key":"0"}),
    createElement(Path, {"d":"M18.398 20L3 20C2.449 20 2 19.551 2 19L2 5C2 4.449 2.449 4 3 4L5.602 4","key":"1"}),
    createElement(Path, {"d":"M11.602 4L21 4C21.551 4 22 4.449 22 5L22 17","key":"2"}),
    createElement(Path, {"d":"M20 22L4 2","key":"3"})
  );
});

DockCornerOff.displayName = 'DockCornerOff';

export default DockCornerOff;
export { DockCornerOff };
