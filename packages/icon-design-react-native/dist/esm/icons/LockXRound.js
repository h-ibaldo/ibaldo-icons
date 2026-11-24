import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Path } from 'react-native-svg';

const LockXRound = forwardRef(function LockXRound(
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
    createElement(Path, {"d":"M6.974731457399685,10v-3c0-2.761420987731981,2.238574012269964-5,4.999994999990122-5l.000010000000657.000004999998055c2.761420987739257,0,4.999995000009221,2.238574012269964,4.999995000009221,4.999995000001945v3","key":"0"}),
    createElement(Circle, {"cx":"11.974731457399685","cy":"15","r":"7.000000000000001","key":"1"}),
    createElement(Line, {"x1":"9.974731457529742","y1":"17","x2":"13.974731457250527","y2":"12.999999995154212","key":"2"}),
    createElement(Line, {"x1":"9.974731457399685","y1":"12.999999995328835","x2":"13.974731457399685","y2":"16.999999999818101","key":"3"})
  );
});

LockXRound.displayName = 'LockXRound';

export default LockXRound;
export { LockXRound };
