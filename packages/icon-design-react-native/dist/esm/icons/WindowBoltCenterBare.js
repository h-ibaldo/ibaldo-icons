import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline, Rect } from 'react-native-svg';

const WindowBoltCenterBare = forwardRef(function WindowBoltCenterBare(
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
    createElement(Rect, {"x":"2.000000000183718","y":"2.00000000044929","width":"20","height":"20","rx":"2","ry":"2","key":"0"}),
    createElement(Polyline, {"points":"12.000000000183718 14.000000000448381 12.000000000183718 18.000000000448381 15.000000000183718 13.000000000448381 9.000000000183718 15.000000000448381 12.000000000183718 10.000000000448381 12.000000000183718 14.000000000448381","key":"1"}),
    createElement(Line, {"x1":"5.010000000183936","y1":"5.000000000448381","x2":"5.000000000183718","y2":"5.000000000448381","key":"2"}),
    createElement(Line, {"x1":"8.010000000183936","y1":"5.000000000448381","x2":"8.000000000183718","y2":"5.000000000448381","key":"3"}),
    createElement(Line, {"x1":"11.010000000183936","y1":"5.000000000448381","x2":"11.000000000183718","y2":"5.000000000448381","key":"4"})
  );
});

WindowBoltCenterBare.displayName = 'WindowBoltCenterBare';

export default WindowBoltCenterBare;
export { WindowBoltCenterBare };
