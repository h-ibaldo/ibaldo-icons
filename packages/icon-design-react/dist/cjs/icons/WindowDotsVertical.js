'use strict';

const { createElement, forwardRef } = require('react');

const WindowDotsVertical = forwardRef(function WindowDotsVertical(
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
    createElement('line', {"x1":"22.000000000183718","y1":"10.010000000448599","x2":"22.000000000183718","y2":"10.000000000448381","key":"0"}),
    createElement('line', {"x1":"22.000000000183718","y1":"6.010000000448599","x2":"22.000000000183718","y2":"6.000000000448381","key":"1"}),
    createElement('line', {"x1":"22.000000000183718","y1":"2.010000000448599","x2":"22.000000000183718","y2":"2.000000000448381","key":"2"}),
    createElement('path', {"d":"M22.000000000183718,15.000000000448381v5c0,1.10456949966283-.895430500338989,2-2,2H4.000000000183718c-1.104569499661011,0-2-.895430500338989-2-2V4.000000000448381c0-1.10456949966192.895430500338989-2,2-2h13","key":"3"}),
    createElement('line', {"x1":"2.000000000183718","y1":"8.000000000448381","x2":"17.000000000183718","y2":"8.000000000448381","key":"4"}),
    createElement('line', {"x1":"5.010000000183936","y1":"5.000000000448381","x2":"5.000000000183718","y2":"5.000000000448381","key":"5"}),
    createElement('line', {"x1":"8.010000000183936","y1":"5.000000000448381","x2":"8.000000000183718","y2":"5.000000000448381","key":"6"}),
    createElement('line', {"x1":"11.010000000183936","y1":"5.000000000448381","x2":"11.000000000183718","y2":"5.000000000448381","key":"7"})
  );
});

WindowDotsVertical.displayName = 'WindowDotsVertical';

module.exports = WindowDotsVertical;
module.exports.WindowDotsVertical = WindowDotsVertical;
module.exports.default = WindowDotsVertical;
