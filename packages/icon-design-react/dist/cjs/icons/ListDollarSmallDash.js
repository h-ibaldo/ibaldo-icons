'use strict';

const { createElement, forwardRef } = require('react');

const ListDollarSmallDash = forwardRef(function ListDollarSmallDash(
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
    createElement('path', {"d":"M7 4L13 4","key":"0"}),
    createElement('path', {"d":"M7 9L13 9","key":"1"}),
    createElement('path', {"d":"M2 4L3 4","key":"2"}),
    createElement('path', {"d":"M2 9L3 9","key":"3"}),
    createElement('path', {"d":"M7 14L13 14","key":"4"}),
    createElement('path', {"d":"M2 14L3 14","key":"5"}),
    createElement('path', {"d":"M21 13.5L20.449 13.316C19.82 13.105 19.16 13 18.5 13C17.395 13 16.5 13.895 16.5 15C16.5 16.105 17.395 17 18.5 17L19.5 17C20.605 17 21.5 17.895 21.5 19C21.5 20.105 20.605 21 19.5 21C18.84 21 18.18 20.895 17.551 20.684L17 20.5","key":"6"}),
    createElement('path', {"d":"M19 12L19 13","key":"7"}),
    createElement('path', {"d":"M19 21L19 22","key":"8"})
  );
});

ListDollarSmallDash.displayName = 'ListDollarSmallDash';

module.exports = ListDollarSmallDash;
module.exports.ListDollarSmallDash = ListDollarSmallDash;
module.exports.default = ListDollarSmallDash;
