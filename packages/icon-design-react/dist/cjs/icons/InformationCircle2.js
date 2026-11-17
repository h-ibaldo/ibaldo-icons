'use strict';

const { createElement, forwardRef } = require('react');

const InformationCircle2 = forwardRef(function InformationCircle2(
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
    createElement('circle', {"cx":"11.949462874325036","cy":"11.997562036765885","r":"8.000000000000455","key":"0"}),
    createElement('line', {"x1":"11.949462874325036","y1":"8.987562036764757","x2":"11.949462874325036","y2":"8.997562036764975","key":"1"}),
    createElement('line', {"x1":"11.949462874325036","y1":"14.997562036764975","x2":"11.949462874325036","y2":"11.997562036764975","key":"2"})
  );
});

InformationCircle2.displayName = 'InformationCircle2';

module.exports = InformationCircle2;
module.exports.InformationCircle2 = InformationCircle2;
module.exports.default = InformationCircle2;
