import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Rect } from 'react-native-svg';

const LockEye = forwardRef(function LockEye(
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
    createElement(Line, {"x1":"12","y1":"16.010000000000218","x2":"12","y2":"16","key":"0"}),
    createElement(Path, {"d":"M12,13c-1.861755371090112,0-3.412475585940228,1.2777099609375-3.858581542969659,3,.446105957029431,1.72222900390625,1.996826171879547,3,3.858581542969659,3,1.861755371100116,0,3.412475585940228-1.27777099609375,3.858581542969659-3-.446105957029431-1.7222900390625-1.996826171869543-3-3.858581542969659-3Z","key":"1"}),
    createElement(Rect, {"x":"4","y":"10","width":"16","height":"12","rx":"1","ry":"1","key":"2"}),
    createElement(Path, {"d":"M17,10v-3.000005000001693c0-2.761420987728343-2.238574012269964-4.999994999998307-4.999995000000126-4.999994999998307h-.000009999999747c-2.761420987730162,0-4.999995000000126,2.238574012269964-4.999995000000126,4.999994999998307v3.000005000001693","key":"3"})
  );
});

LockEye.displayName = 'LockEye';

export default LockEye;
export { LockEye };
