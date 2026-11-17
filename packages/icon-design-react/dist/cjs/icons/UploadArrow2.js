'use strict';

const { createElement, forwardRef } = require('react');

const UploadArrow2 = forwardRef(function UploadArrow2(
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
    createElement('polyline', {"points":"6.97473145017193 7.999999999336069 11.974731451296975 3.000000000462023 16.97473145017193 8.000000001585249","key":"0"}),
    createElement('line', {"x1":"11.974731448378407","y1":"16.000000000462023","x2":"11.974731451296975","y2":"3.000000000462023","key":"1"}),
    createElement('line', {"x1":"2.974731450037325","y1":"21.000000000462933","x2":"20.974731450037325","y2":"21.000000000462933","key":"2"})
  );
});

UploadArrow2.displayName = 'UploadArrow2';

module.exports = UploadArrow2;
module.exports.UploadArrow2 = UploadArrow2;
module.exports.default = UploadArrow2;
