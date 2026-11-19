import { createElement, forwardRef } from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

const DockFill = forwardRef(function DockFill(
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
    createElement(Rect, {"x":"1.974731417511066","y":"1.998779298535737","width":"20","height":"20","rx":"1","ry":"1","key":"0"}),
    createElement(Line, {"x1":"1.974731417511066","y1":"5.998779298535737","x2":"21.974731417511066","y2":"5.998779298535737","key":"1"})
  );
});

DockFill.displayName = 'DockFill';

export default DockFill;
export { DockFill };
