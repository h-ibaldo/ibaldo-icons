'use strict';

const { createElement, forwardRef } = require('react');

const WindowPopUp2 = forwardRef(function WindowPopUp2(
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
    createElement('rect', {"x":"2","y":"2","width":"20","height":"20","rx":"2","ry":"2","key":"0"}),
    createElement('line', {"x1":"6.010000000000218","y1":"6","x2":"6","y2":"6","key":"1"}),
    createElement('line', {"x1":"9.010000000000218","y1":"6","x2":"9","y2":"6","key":"2"}),
    createElement('line', {"x1":"12.010000000000218","y1":"6","x2":"12","y2":"6","key":"3"}),
    createElement('rect', {"x":"7","y":"11","width":"12","height":"8","rx":"1","ry":"1","key":"4"})
  );
});

WindowPopUp2.displayName = 'WindowPopUp2';

module.exports = WindowPopUp2;
module.exports.WindowPopUp2 = WindowPopUp2;
module.exports.default = WindowPopUp2;
