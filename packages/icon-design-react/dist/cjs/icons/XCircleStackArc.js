'use strict';

const { createElement, forwardRef } = require('react');

const XCircleStackArc = forwardRef(function XCircleStackArc(
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
    createElement('path', {"d":"M17 14.5C17 10.359 13.645 7 9.5 7C5.355 7 2 10.359 2 14.5C2 18.641 5.355 22 9.5 22C13.645 22 17 18.641 17 14.5Z","key":"0"}),
    createElement('path', {"d":"M20.484 14C21.434 12.746 22 11.191 22 9.5C22 5.359 18.641 2 14.5 2C12.809 2 11.254 2.566 10 3.512","key":"1"}),
    createElement('path', {"d":"M7 17L12 12","key":"2"}),
    createElement('path', {"d":"M12 17L7 12","key":"3"})
  );
});

XCircleStackArc.displayName = 'XCircleStackArc';

module.exports = XCircleStackArc;
module.exports.XCircleStackArc = XCircleStackArc;
module.exports.default = XCircleStackArc;
