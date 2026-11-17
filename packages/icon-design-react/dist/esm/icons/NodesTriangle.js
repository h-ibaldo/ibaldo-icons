import { createElement, forwardRef } from 'react';

const NodesTriangle = forwardRef(function NodesTriangle(
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
    createElement('circle', {"cx":"5","cy":"11.999999999998181","r":"2","key":"0"}),
    createElement('circle', {"cx":"19","cy":"3.999999999998181","r":"2","key":"1"}),
    createElement('circle', {"cx":"19","cy":"19.999999999998181","r":"2","key":"2"}),
    createElement('line', {"x1":"17.27099609375","y1":"4.988037109367724","x2":"6.72900390625","y2":"11.011962890617724","key":"3"}),
    createElement('line', {"x1":"19","y1":"17.999999999998181","x2":"19","y2":"5.999999999998181","key":"4"}),
    createElement('line', {"x1":"6.72900390625","y1":"12.988037109367724","x2":"17.27099609375","y2":"19.011962890617724","key":"5"})
  );
});

NodesTriangle.displayName = 'NodesTriangle';

export default NodesTriangle;
export { NodesTriangle };
