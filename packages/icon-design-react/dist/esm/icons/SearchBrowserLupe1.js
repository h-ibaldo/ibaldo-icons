import { createElement, forwardRef } from 'react';

const SearchBrowserLupe1 = forwardRef(function SearchBrowserLupe1(
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
    createElement('path', {"d":"M9.999999976300387,21.960388185868396H3.999999976300387c-1.104569499661011,0-2-.895430500338989-2-2V3.960388185868396c0-1.10456949966192.895430500338989-2,2-2h16c1.104569499659192,0,2,.89543050033808,2,2v9.076782226561591","key":"0"}),
    createElement('line', {"x1":"1.999999976300387","y1":"7.960388185868396","x2":"21.999999976300387","y2":"7.960388185868396","key":"1"}),
    createElement('line', {"x1":"5.009999976300605","y1":"4.960388185868396","x2":"4.999999976300387","y2":"4.960388185868396","key":"2"}),
    createElement('line', {"x1":"8.009999976300605","y1":"4.960388185868396","x2":"7.999999976300387","y2":"4.960388185868396","key":"3"}),
    createElement('line', {"x1":"18.9999999763495","y1":"4.960388185868396","x2":"10.999999976300387","y2":"4.960388185868396","key":"4"}),
    createElement('circle', {"cx":"14.999999976300387","cy":"16.037170412430896","r":"4.000000000000455","key":"5"}),
    createElement('line', {"x1":"20.999999976300387","y1":"22.037170412429987","x2":"17.78637692941993","y2":"18.900329592118396","key":"6"})
  );
});

SearchBrowserLupe1.displayName = 'SearchBrowserLupe1';

export default SearchBrowserLupe1;
export { SearchBrowserLupe1 };
