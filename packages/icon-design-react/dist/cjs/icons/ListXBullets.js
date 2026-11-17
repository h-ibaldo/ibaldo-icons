'use strict';

const { createElement, forwardRef } = require('react');

const ListXBullets = forwardRef(function ListXBullets(
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
    createElement('path', {"d":"M10.117 4L22.117 4","key":"0"}),
    createElement('path', {"d":"M10.117 12L22.117 12","key":"1"}),
    createElement('path', {"d":"M10.117 20L22.117 20","key":"2"}),
    createElement('path', {"d":"M6.117 2L2.117 6","key":"3"}),
    createElement('path', {"d":"M2.117 2L6.117 6","key":"4"}),
    createElement('path', {"d":"M6.117 10L2.117 14","key":"5"}),
    createElement('path', {"d":"M2.117 10L6.117 14","key":"6"}),
    createElement('path', {"d":"M6.117 18L2.117 22","key":"7"}),
    createElement('path', {"d":"M2.117 18L6.117 22","key":"8"})
  );
});

ListXBullets.displayName = 'ListXBullets';

module.exports = ListXBullets;
module.exports.ListXBullets = ListXBullets;
module.exports.default = ListXBullets;
