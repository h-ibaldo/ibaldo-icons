import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline, Rect } from 'react-native-svg';

const DockTop = forwardRef(function DockTop(
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
    createElement(Rect, {"x":"1.974731417872135","y":"1.998779298535737","width":"20","height":"12","rx":".999999999999706","ry":".999999999999706","key":"0"}),
    createElement(Polyline, {"points":"8.974731416881696 21.998779297997316 11.974731417150906 18.998779298266527 14.974731416881696 21.998779298535737","key":"1"}),
    createElement(Line, {"x1":"1.974731418051306","y1":"5.998779297637157","x2":"21.974731418051306","y2":"5.998779299434318","key":"2"})
  );
});

DockTop.displayName = 'DockTop';

export default DockTop;
export { DockTop };
