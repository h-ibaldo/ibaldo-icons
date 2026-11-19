import { createElement, forwardRef } from 'react';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

const LockKeyholeDot = forwardRef(function LockKeyholeDot(
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
    createElement(Circle, {"cx":"11.949462885139837","cy":"16.000000000480213","r":"1","key":"0"}),
    createElement(Rect, {"x":"3.949462885139837","y":"10.000000000480213","width":"16","height":"12","rx":"1","ry":"1","key":"1"}),
    createElement(Path, {"d":"M16.949462885139837,10.000000000480213v-3.000005000001693c0-2.761420987728343-2.238574012269964-4.999994999998307-4.999995000000126-4.999994999998307h-.000009999999747c-2.761420987730162,0-4.999995000000126,2.238574012269964-4.999995000000126,4.999994999998307v3.000005000001693","key":"2"})
  );
});

LockKeyholeDot.displayName = 'LockKeyholeDot';

export default LockKeyholeDot;
export { LockKeyholeDot };
