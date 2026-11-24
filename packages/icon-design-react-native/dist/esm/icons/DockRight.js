import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline, Rect } from 'react-native-svg';

const DockRight = forwardRef(function DockRight(
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
    createElement(Rect, {"x":"5.974731417777548","y":"5.998779298355657","width":"20","height":"12","rx":".999999999997684","ry":".999999999997684","transform":"translate(27.973510715414747 -3.975952119961534) rotate(89.999999997423146)","key":"0"}),
    createElement(Polyline, {"points":"1.974731418182273 14.998779299121452 4.974731417782095 11.998779298717636 1.974731417372823 8.998779299121452","key":"1"}),
    createElement(Line, {"x1":"21.974731417511066","y1":"5.998779298088266","x2":"9.974731417511066","y2":"5.998779298626687","key":"2"})
  );
});

DockRight.displayName = 'DockRight';

export default DockRight;
export { DockRight };
