import { createElement, forwardRef } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const LockNarrow = forwardRef(function LockNarrow(
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
    createElement(Rect, {"x":"4.974731450040053","y":"10.000000003885361","width":"14","height":"12","rx":"1","ry":"1","key":"0"}),
    createElement(Path, {"d":"M16.974731450040053,10.000000003885361v-3.000004999998055c0-2.761420987731981-2.238574012269964-4.999995000001945-4.999994999989212-4.999995000001945h-.000009999999747c-2.761420987741076,0-4.99999500001104,2.238574012269964-4.99999500001104,4.999995000001945v3.000004999998055","key":"1"})
  );
});

LockNarrow.displayName = 'LockNarrow';

export default LockNarrow;
export { LockNarrow };
