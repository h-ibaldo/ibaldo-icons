'use strict';

const { createElement, forwardRef } = require('react');

const Clock29 = forwardRef(function Clock29(
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
    createElement('circle', {"cx":"12","cy":"11.999999999887223","r":"10","key":"0"}),
    createElement('polyline', {"points":"12 6.999999999887223 12 11.999999999887223 17 11.999999999887223","key":"1"})
  );
});

Clock29.displayName = 'Clock29';

module.exports = Clock29;
module.exports.Clock29 = Clock29;
module.exports.default = Clock29;
