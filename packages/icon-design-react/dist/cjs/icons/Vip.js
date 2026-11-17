'use strict';

const { createElement, forwardRef } = require('react');

const Vip = forwardRef(function Vip(
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
    createElement('polyline', {"points":"1.999999968595148 7.997562036226554 4.999999968595148 15.997562036226554 7.999999968595148 7.997562036226554","key":"0"}),
    createElement('line', {"x1":"16.999999968595148","y1":"7.997562036226554","x2":"16.999999968595148","y2":"15.997562036226554","key":"1"}),
    createElement('line', {"x1":"11.999999968595148","y1":"7.997562036226554","x2":"11.999999968595148","y2":"15.997562036226554","key":"2"}),
    createElement('path', {"d":"M16.999999968595148,7.997562036226554h3c1.104569499661011,0,2,.895430500338989,2,2v1c0,1.10456949966192-.895430500338989,2-2,2h-3","key":"3"})
  );
});

Vip.displayName = 'Vip';

module.exports = Vip;
module.exports.Vip = Vip;
module.exports.default = Vip;
