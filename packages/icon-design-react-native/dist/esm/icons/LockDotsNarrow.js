import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Rect } from 'react-native-svg';

const LockDotsNarrow = forwardRef(function LockDotsNarrow(
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
    createElement(Rect, {"x":"4.949462885144385","y":"10.000000000480213","width":"14","height":"12","rx":"1","ry":"1","key":"0"}),
    createElement(Path, {"d":"M16.949462885144385,10.000000000480213v-3.000005000001693c0-2.761420987728343-2.238574012269964-4.999994999998307-4.999994999999217-4.999994999998307h-.000010000001566c-2.761420987731981,0-4.999994999999217,2.238574012269964-4.999994999999217,4.999994999998307v3.000005000001693","key":"1"}),
    createElement(Line, {"x1":"8.949462885142566","y1":"15.990000000479995","x2":"8.949462885142566","y2":"16.000000000480213","key":"2"}),
    createElement(Line, {"x1":"11.949462885142566","y1":"15.990000000479995","x2":"11.949462885142566","y2":"16.000000000480213","key":"3"}),
    createElement(Line, {"x1":"14.949462885142566","y1":"15.990000000479995","x2":"14.949462885142566","y2":"16.000000000480213","key":"4"})
  );
});

LockDotsNarrow.displayName = 'LockDotsNarrow';

export default LockDotsNarrow;
export { LockDotsNarrow };
