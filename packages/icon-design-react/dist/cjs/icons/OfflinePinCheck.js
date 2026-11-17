'use strict';

const { createElement, forwardRef } = require('react');

const OfflinePinCheck = forwardRef(function OfflinePinCheck(
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
    createElement('circle', {"cx":"12.000000004471076","cy":"12.000000003885361","r":"10","key":"0"}),
    createElement('line', {"x1":"8.000000004471076","y1":"16.000000003885361","x2":"16.000000004471076","y2":"16.000000003885361","key":"1"}),
    createElement('polyline', {"points":"8.000000004471076 10.500000003885361 10.500000004471076 13.000000003885361 16.000000004471076 8.000000003885361","key":"2"})
  );
});

OfflinePinCheck.displayName = 'OfflinePinCheck';

module.exports = OfflinePinCheck;
module.exports.OfflinePinCheck = OfflinePinCheck;
module.exports.default = OfflinePinCheck;
