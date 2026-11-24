import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline, Rect } from 'react-native-svg';

const MobileCartCenter = forwardRef(function MobileCartCenter(
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
    createElement(Rect, {"x":"5.050537117662316","y":"1.998782732995096","width":"14","height":"20","rx":"2","ry":"2","key":"0"}),
    createElement(Line, {"x1":"5.050537117662316","y1":"4.998782732995096","x2":"19.050537117662316","y2":"4.998782732995096","key":"1"}),
    createElement(Line, {"x1":"5.050537117662316","y1":"18.998782732995096","x2":"19.050537117662316","y2":"18.998782732995096","key":"2"}),
    createElement(Polyline, {"points":"8.050537117662316 8.998782732995096 10.050537117662316 8.998782732995096 11.050537117662316 12.998782732995096 14.050537117662316 12.998782732995096 15.050537117662316 9.998782732995096 10.550537117662316 9.998782732995096","key":"3"}),
    createElement(Line, {"x1":"11.050537117662316","y1":"14.998782732995096","x2":"11.050537117662316","y2":"14.998782732995096","key":"4"}),
    createElement(Line, {"x1":"14.050537117662316","y1":"14.998782732995096","x2":"14.050537117662316","y2":"14.998782732995096","key":"5"})
  );
});

MobileCartCenter.displayName = 'MobileCartCenter';

export default MobileCartCenter;
export { MobileCartCenter };
