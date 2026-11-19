import { createElement, forwardRef } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const LockRound = forwardRef(function LockRound(
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
    createElement(Path, {"d":"M6.974731450040053,10.000000003885361v-3c0-2.761420987731981,2.238574012269964-5,4.99999500001104-5l.000009999999747.000004999998055c2.761420987719248,0,4.999994999989212,2.238574012269964,4.999994999989212,4.999995000001945v3","key":"0"}),
    createElement(Circle, {"cx":"11.974731450040053","cy":"15.000000003885361","r":"7.000000000000001","key":"1"})
  );
});

LockRound.displayName = 'LockRound';

export default LockRound;
export { LockRound };
