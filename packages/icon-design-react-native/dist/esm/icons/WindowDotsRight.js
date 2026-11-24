import { createElement, forwardRef } from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

const WindowDotsRight = forwardRef(function WindowDotsRight(
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
    createElement(Rect, {"x":"2.00000000018008","y":"2.000000000448836","width":"20","height":"20","rx":"1.999999999999068","ry":"1.999999999999068","key":"0"}),
    createElement(Line, {"x1":"22","y1":"8","x2":"2","y2":"8.000000000897671","key":"1"}),
    createElement(Line, {"x1":"19.009999999870161","y1":"5.000000000133696","x2":"18.999999999869942","y2":"5.000000000133696","key":"2"}),
    createElement(Line, {"x1":"16.009999999870161","y1":"5.000000000268301","x2":"15.999999999869942","y2":"5.000000000268301","key":"3"}),
    createElement(Line, {"x1":"13.009999999870161","y1":"5.000000000403816","x2":"12.999999999869942","y2":"5.000000000403816","key":"4"})
  );
});

WindowDotsRight.displayName = 'WindowDotsRight';

export default WindowDotsRight;
export { WindowDotsRight };
