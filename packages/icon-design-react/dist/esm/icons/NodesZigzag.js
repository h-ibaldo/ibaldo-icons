import { createElement, forwardRef } from 'react';

const NodesZigzag = forwardRef(function NodesZigzag(
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
    createElement('circle', {"cx":"4","cy":"9.999999999998181","r":"2","key":"0"}),
    createElement('circle', {"cx":"14","cy":"18.999999999998181","r":"2","key":"1"}),
    createElement('circle', {"cx":"20","cy":"4.999999999998181","r":"2","key":"2"}),
    createElement('line', {"x1":"14.78759765625","y1":"17.162109374998181","x2":"19.21240234375","y2":"6.837890624998181","key":"3"}),
    createElement('line', {"x1":"5.481201171880457","y1":"11.333007812498181","x2":"12.518798828130457","y2":"17.666992187498181","key":"4"})
  );
});

NodesZigzag.displayName = 'NodesZigzag';

export default NodesZigzag;
export { NodesZigzag };
