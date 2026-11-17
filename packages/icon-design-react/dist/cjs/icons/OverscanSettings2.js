'use strict';

const { createElement, forwardRef } = require('react');

const OverscanSettings2 = forwardRef(function OverscanSettings2(
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
    createElement('rect', {"x":"1.974731449505271","y":"3.000000000479304","width":"20","height":"18.000000000000909","rx":"3","ry":"3","key":"0"}),
    createElement('polyline', {"points":"12.974731449505271 8.000000000480213 11.974731450083709 7.000000000298314 10.974731449505271 8.000000000480213","key":"1"}),
    createElement('polyline', {"points":"12.974731449505271 16.000000000480213 11.974731450083709 17.000000000662112 10.974731449505271 16.000000000480213","key":"2"}),
    createElement('polyline', {"points":"16.974731449323372 13.000000000480213 17.974731449505271 12.00000000106229 16.974731449323372 11.000000000480213","key":"3"}),
    createElement('polyline', {"points":"6.974731449683532 13.000000000480213 5.974731449505271 12.00000000106229 6.974731449683532 11.000000000480213","key":"4"})
  );
});

OverscanSettings2.displayName = 'OverscanSettings2';

module.exports = OverscanSettings2;
module.exports.OverscanSettings2 = OverscanSettings2;
module.exports.default = OverscanSettings2;
