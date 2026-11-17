import { createElement, forwardRef } from 'react';

const WarningSquare = forwardRef(function WarningSquare(
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
    createElement('line', {"x1":"11.974731450040053","y1":"16.010000000480431","x2":"11.974731450040053","y2":"16.000000000479304","key":"0"}),
    createElement('line', {"x1":"11.974731450040053","y1":"8.000000000479304","x2":"11.974731450040053","y2":"12.000000000479304","key":"1"}),
    createElement('rect', {"x":"1.974731450049148","y":"2.000000000928594","width":"20","height":"20","rx":"3","ry":"3","key":"2"})
  );
});

WarningSquare.displayName = 'WarningSquare';

export default WarningSquare;
export { WarningSquare };
