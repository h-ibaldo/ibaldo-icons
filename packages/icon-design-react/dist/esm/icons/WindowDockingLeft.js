import { createElement, forwardRef } from 'react';

const WindowDockingLeft = forwardRef(function WindowDockingLeft(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('rect', {"x":"-2.025268582488934","y":"5.998779298535737","width":"20","height":"12","rx":"1","ry":"1","transform":"translate(19.973510716046803 4.02404788102467) rotate(90)","key":"0"}),
    createElement('polyline', {"points":"21.974731417241856 14.998779298673981 18.974731417511066 11.998779298401132 21.974731417782095 8.998779298673981","key":"1"}),
    createElement('line', {"x1":"1.974731417511066","y1":"5.998779298535737","x2":"13.974731417511066","y2":"5.998779298535737","key":"2"})
  );
});

WindowDockingLeft.displayName = 'WindowDockingLeft';

export default WindowDockingLeft;
export { WindowDockingLeft };
