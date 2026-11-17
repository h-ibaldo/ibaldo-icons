'use strict';

const { createElement, forwardRef } = require('react');

const ApplicationWindow2Search = forwardRef(function ApplicationWindow2Search(
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
    createElement('path', {"d":"M11.00000000018008,22.000000000456566l-6.999999999990905.000000000002728c-1.104569499659192,0-2-.89543050033717-2-2V4.000000000456566c0-1.104569499661011.895430500340808-1.999999999997272,2-1.999999999997272l16-.000000000002728c1.104569499671925,0,2,.895430500338989,2,2v6.999999999991815","key":"0"}),
    createElement('circle', {"cx":"16.00000000018008","cy":"16.000000000449745","r":"4.000000000000682","key":"1"}),
    createElement('line', {"x1":"22.00000000018008","y1":"22.000000000448381","x2":"18.786376953319632","y2":"18.8631591801377","key":"2"}),
    createElement('line', {"x1":"5.010000000180298","y1":"5.000000000448381","x2":"5.00000000018008","y2":"5.000000000448381","key":"3"}),
    createElement('line', {"x1":"8.010000000180298","y1":"5.000000000448381","x2":"8.00000000018008","y2":"5.000000000448381","key":"4"}),
    createElement('line', {"x1":"11.010000000180298","y1":"5.000000000448381","x2":"11.00000000018008","y2":"5.000000000448381","key":"5"})
  );
});

ApplicationWindow2Search.displayName = 'ApplicationWindow2Search';

module.exports = ApplicationWindow2Search;
module.exports.ApplicationWindow2Search = ApplicationWindow2Search;
module.exports.default = ApplicationWindow2Search;
