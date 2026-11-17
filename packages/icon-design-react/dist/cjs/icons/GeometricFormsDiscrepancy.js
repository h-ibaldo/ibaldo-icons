'use strict';

const { createElement, forwardRef } = require('react');

const GeometricFormsDiscrepancy = forwardRef(function GeometricFormsDiscrepancy(
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
    createElement('rect', {"x":"2.00000000018008","y":"2.000000000446562","width":"20","height":"20","key":"0"}),
    createElement('polygon', {"points":"10.00000000018008 13.000000000448381 12.00000000018008 10.000000000448381 14.00000000018008 13.000000000448381 10.00000000018008 13.000000000448381","key":"1"}),
    createElement('polygon', {"points":"8.50000000018008 18.000000000448381 15.50000000018008 18.000000000448381 19.00000000018008 12.000000000448381 15.50000000018008 6.000000000448381 8.50000000018008 6.000000000448381 5.00000000018008 12.000000000448381 8.50000000018008 18.000000000448381","key":"2"})
  );
});

GeometricFormsDiscrepancy.displayName = 'GeometricFormsDiscrepancy';

module.exports = GeometricFormsDiscrepancy;
module.exports.GeometricFormsDiscrepancy = GeometricFormsDiscrepancy;
module.exports.default = GeometricFormsDiscrepancy;
