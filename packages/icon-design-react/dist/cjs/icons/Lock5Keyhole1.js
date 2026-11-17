'use strict';

const { createElement, forwardRef } = require('react');

const Lock5Keyhole1 = forwardRef(function Lock5Keyhole1(
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
    createElement('path', {"d":"M6.949462885139837,10.000000000480213v-3c0-2.761420987731981,2.238574012269964-5,4.999995000000126-5l.000009999999747.000004999998055c2.761420987730162,0,4.999995000000126,2.238574012269964,4.999995000000126,4.999995000001945v3","key":"0"}),
    createElement('circle', {"cx":"11.949462885139837","cy":"15.000000000480213","r":"7.000000000000001","key":"1"}),
    createElement('line', {"x1":"11.949462885139837","y1":"18.000000000480213","x2":"11.949462885139837","y2":"14.000000000480213","key":"2"}),
    createElement('circle', {"cx":"11.949462885139837","cy":"13.000000000480213","r":"1","key":"3"})
  );
});

Lock5Keyhole1.displayName = 'Lock5Keyhole1';

module.exports = Lock5Keyhole1;
module.exports.Lock5Keyhole1 = Lock5Keyhole1;
module.exports.default = Lock5Keyhole1;
