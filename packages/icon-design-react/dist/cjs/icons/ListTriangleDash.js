'use strict';

const { createElement, forwardRef } = require('react');

const ListTriangleDash = forwardRef(function ListTriangleDash(
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
    createElement('path', {"d":"M13.648 22L20.352 22C21.516 22 22.238 20.727 21.637 19.727L18.285 14.145C17.703 13.172 16.297 13.172 15.715 14.145L12.363 19.727C11.762 20.727 12.484 22 13.648 22Z","key":"0"}),
    createElement('path', {"d":"M8 5L14 5","key":"1"}),
    createElement('path', {"d":"M8 10L14 10","key":"2"}),
    createElement('path', {"d":"M3 5L4 5","key":"3"}),
    createElement('path', {"d":"M3 10L4 10","key":"4"}),
    createElement('path', {"d":"M8 15L11 15","key":"5"}),
    createElement('path', {"d":"M3 15L4 15","key":"6"})
  );
});

ListTriangleDash.displayName = 'ListTriangleDash';

module.exports = ListTriangleDash;
module.exports.ListTriangleDash = ListTriangleDash;
module.exports.default = ListTriangleDash;
