'use strict';

const { createElement, forwardRef } = require('react');

const BoxPerspective = forwardRef(function BoxPerspective(
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
    createElement('polygon', {"points":"12 1.999999999998181 2 5.999999999998181 2 17.999999999998181 12 21.999999999998181 22 17.999999999998181 22 5.999999999998181 12 1.999999999998181","key":"0"}),
    createElement('polyline', {"points":"22 5.999999999998181 12 9.999999999998181 12 21.999999999998181","key":"1"}),
    createElement('polyline', {"points":"17 3.999999999998181 7 7.999999999998181 7 10.999999999998181","key":"2"})
  );
});

BoxPerspective.displayName = 'BoxPerspective';

module.exports = BoxPerspective;
module.exports.BoxPerspective = BoxPerspective;
module.exports.default = BoxPerspective;
