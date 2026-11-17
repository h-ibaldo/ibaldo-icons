'use strict';

const { createElement, forwardRef } = require('react');

const FunnelFilter3 = forwardRef(function FunnelFilter3(
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
    createElement('polygon', {"points":"12 15.999999999998181 2 2.999999999998181 22 2.999999999998181 12 15.999999999998181","key":"0"}),
    createElement('line', {"x1":"12","y1":"15.999999999998181","x2":"12","y2":"20.999999999998181","key":"1"})
  );
});

FunnelFilter3.displayName = 'FunnelFilter3';

module.exports = FunnelFilter3;
module.exports.FunnelFilter3 = FunnelFilter3;
module.exports.default = FunnelFilter3;
