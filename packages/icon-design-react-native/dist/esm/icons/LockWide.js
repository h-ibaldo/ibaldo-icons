import { createElement, forwardRef } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const LockWide = forwardRef(function LockWide(
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
    createElement(Rect, {"x":"3.974731450040053","y":"13.000000003885361","width":"16","height":"9","rx":"1","ry":"1","key":"0"}),
    createElement(Path, {"d":"M16.974731450040053,13.000000003885361v-6.000004999998055c0-2.761420987731981-2.238574012269964-4.999995000001945-4.999994999989212-4.999995000001945h-.000009999999747c-2.761420987741076,0-4.99999500001104,2.238574012269964-4.99999500001104,4.999995000001945v6.000004999998055","key":"1"})
  );
});

LockWide.displayName = 'LockWide';

export default LockWide;
export { LockWide };
