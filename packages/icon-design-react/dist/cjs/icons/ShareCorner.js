'use strict';

const { createElement, forwardRef } = require('react');

const ShareCorner = forwardRef(function ShareCorner(
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
    createElement('path', {"d":"M2,1.999999999998181v17c0,1.656854249489697,1.343145750510303,3,3,3h17","key":"0"}),
    createElement('polyline', {"points":"18 1.999999999998181 22 5.999999999998181 18 9.999999999998181","key":"1"}),
    createElement('path', {"d":"M7,16.999999999998181v-2c0-4.970562748480006,4.029437251519994-9,9-9h6","key":"2"})
  );
});

ShareCorner.displayName = 'ShareCorner';

module.exports = ShareCorner;
module.exports.ShareCorner = ShareCorner;
module.exports.default = ShareCorner;
