import { createElement, forwardRef } from 'react';

const DockVertical = forwardRef(function DockVertical(
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
    createElement('rect', {"x":"1.974731417511066","y":"1.998779298535737","width":"20","height":"20","rx":"1","ry":"1","key":"0"}),
    createElement('line', {"x1":"1.974731417511066","y1":"5.998779298535737","x2":"21.974731417511066","y2":"5.998779298535737","key":"1"}),
    createElement('line', {"x1":"7.974731417471048","y1":"14.498779298357476","x2":"7.974731417511066","y2":"13.498779298357476","key":"2"}),
    createElement('line', {"x1":"11.974731417471048","y1":"14.498779298535737","x2":"11.974731417511066","y2":"13.498779298535737","key":"3"}),
    createElement('line', {"x1":"11.974731417471048","y1":"14.498779298535737","x2":"11.974731417511066","y2":"13.498779298535737","key":"4"}),
    createElement('line', {"x1":"15.974731417471048","y1":"14.498779298717636","x2":"15.974731417511066","y2":"13.498779298717636","key":"5"})
  );
});

DockVertical.displayName = 'DockVertical';

export default DockVertical;
export { DockVertical };
