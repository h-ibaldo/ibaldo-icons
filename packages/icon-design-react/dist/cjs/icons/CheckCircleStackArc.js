'use strict';

const { createElement, forwardRef } = require('react');

const CheckCircleStackArc = forwardRef(function CheckCircleStackArc(
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
    createElement('path', {"d":"M17 9.5C17 13.641 13.645 17 9.5 17C5.355 17 2 13.641 2 9.5C2 5.359 5.355 2 9.5 2C13.645 2 17 5.359 17 9.5Z","key":"0"}),
    createElement('path', {"d":"M6.5 9.5L8.5 11.5L12.5 7.5","key":"1"}),
    createElement('path', {"d":"M20.484 10C21.434 11.254 22 12.809 22 14.5C22 18.641 18.641 22 14.5 22C12.809 22 11.254 21.434 10 20.488","key":"2"})
  );
});

CheckCircleStackArc.displayName = 'CheckCircleStackArc';

module.exports = CheckCircleStackArc;
module.exports.CheckCircleStackArc = CheckCircleStackArc;
module.exports.default = CheckCircleStackArc;
