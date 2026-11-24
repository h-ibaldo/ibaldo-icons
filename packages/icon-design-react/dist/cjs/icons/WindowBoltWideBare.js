'use strict';

const { createElement, forwardRef } = require('react');

const WindowBoltWideBare = forwardRef(function WindowBoltWideBare(
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
    createElement('path', {"d":"M11.000000000183718,22.000000000448381l-7,.000000000001819c-1.104569499661011,0-2-.895430500338989-2-2V4.000000000448381c0-1.104569499661011.895430500338989-1.999999999998181,2-1.999999999998181l16-.000000000001819c1.104569499661011,0,2,.89543050033808,2,2v2","key":"0"}),
    createElement('polygon', {"points":"16.000000000183718 10.000000000448381 13.000000000183718 16.000000000448381 16.000000000183718 16.000000000448381 15.000000000183718 22.000000000448381 22.000000000183718 15.000000000448381 19.000000000183718 15.000000000448381 22.000000000183718 10.000000000448381 16.000000000183718 10.000000000448381","key":"1"}),
    createElement('line', {"x1":"5.010000000183936","y1":"5.000000000448381","x2":"5.000000000183718","y2":"5.000000000448381","key":"2"}),
    createElement('line', {"x1":"8.010000000183936","y1":"5.000000000448381","x2":"8.000000000183718","y2":"5.000000000448381","key":"3"}),
    createElement('line', {"x1":"11.010000000183936","y1":"5.000000000448381","x2":"11.000000000183718","y2":"5.000000000448381","key":"4"})
  );
});

WindowBoltWideBare.displayName = 'WindowBoltWideBare';

module.exports = WindowBoltWideBare;
module.exports.WindowBoltWideBare = WindowBoltWideBare;
module.exports.default = WindowBoltWideBare;
