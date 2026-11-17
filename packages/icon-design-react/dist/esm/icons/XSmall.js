import { createElement, forwardRef } from 'react';

const XSmall = forwardRef(function XSmall(
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
    createElement('line', {"x1":"5.999999991059667","y1":"18.000000000626642","x2":"17.999999990510332","y2":"6.000000001168701","key":"0"}),
    createElement('line', {"x1":"17.999999990250217","y1":"18.000000000894943","x2":"5.999999991330697","y2":"6.0000000009004","key":"1"})
  );
});

XSmall.displayName = 'XSmall';

export default XSmall;
export { XSmall };
