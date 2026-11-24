'use strict';

const { createElement, forwardRef } = require('react');

const SquareStackPlusCircle = forwardRef(function SquareStackPlusCircle(
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
    createElement('path', {"d":"M9.999999993639904,21.997565472713177h-1c-1.104569499660101,0-2-.895430500338989-2-2v-11c0-1.104569499661011.895430500339899-2,2-2h11c1.104569499660101,0,2,.895430500338989,2,2v1","key":"0"}),
    createElement('circle', {"cx":"16.999999993639904","cy":"16.997565472713177","r":"5","key":"1"}),
    createElement('g', {"key":"2"},
      createElement('line', {"x1":"16.999999993639904","y1":"14.997565472713177","x2":"16.999999993639904","y2":"18.997565472713177","key":"0"}),
      createElement('line', {"x1":"18.999999993639904","y1":"16.997565472622227","x2":"14.999999993639904","y2":"16.997565472801398","key":"1"})),
    createElement('path', {"d":"M6.999999993639904,16.997565472713177h-3c-1.104569499660101,0-2-.895430500338989-2-2V3.997565472713177c0-1.104569499661011.895430500339899-2,2-2h11c1.104569499660101,0,2,.895430500338989,2,2v3","key":"3"})
  );
});

SquareStackPlusCircle.displayName = 'SquareStackPlusCircle';

module.exports = SquareStackPlusCircle;
module.exports.SquareStackPlusCircle = SquareStackPlusCircle;
module.exports.default = SquareStackPlusCircle;
