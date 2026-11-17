import { createElement, forwardRef } from 'react';

const Trash6 = forwardRef(function Trash6(
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
    createElement('polyline', {"points":"22.025268545410654 4.000000001929948 15.025268545410654 4.000000002243723 15.025268545319705 2.000000002243723 9.025268545319705 2.000000002512934 9.025268545410654 4.000000002512934 2.025268545410654 4.000000002829438","key":"0"}),
    createElement('path', {"d":"M20.025268545410654,4.000000002019078l.00000000072032,16c.000000000049113,1.104569499663739-.895430500251678,2.000000000040018-1.99999999991087,2.00000000009004l-12,.00000000053933c-1.104569499659192.000000000049113-2.000000000040018-.89543050024804-2.00000000008913-1.999999999909051l-.00000000072032-16","key":"1"}),
    createElement('line', {"x1":"16.025268545588915","y1":"8.000000002200977","x2":"16.025268546040024","y2":"18.000000002200977","key":"2"}),
    createElement('line', {"x1":"12.025268545588915","y1":"8.000000002378329","x2":"12.025268546040024","y2":"18.000000002378329","key":"3"}),
    createElement('line', {"x1":"8.025268545588915","y1":"8.000000002560228","x2":"8.025268546040024","y2":"18.000000002560228","key":"4"})
  );
});

Trash6.displayName = 'Trash6';

export default Trash6;
export { Trash6 };
