'use strict';

const { createElement, forwardRef } = require('react');

const SortUpNarrowWide = forwardRef(function SortUpNarrowWide(
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
    createElement('path', {"d":"M7 22L7 2","key":"0"}),
    createElement('path', {"d":"M22 22L11 22","key":"1"}),
    createElement('path', {"d":"M19 17L11 17","key":"2"}),
    createElement('path', {"d":"M16 12L11 12","key":"3"}),
    createElement('path', {"d":"M12 7L7 2L2 7","key":"4"})
  );
});

SortUpNarrowWide.displayName = 'SortUpNarrowWide';

module.exports = SortUpNarrowWide;
module.exports.SortUpNarrowWide = SortUpNarrowWide;
module.exports.default = SortUpNarrowWide;
