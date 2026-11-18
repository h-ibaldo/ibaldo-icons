'use strict';

const { createElement, forwardRef } = require('react');

const ListClockDash = forwardRef(function ListClockDash(
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
    createElement('path', {"d":"M20 9L16 9","key":"0"}),
    createElement('path', {"d":"M20 13L16 13","key":"1"}),
    createElement('path', {"d":"M20 17L9 17","key":"2"}),
    createElement('path', {"d":"M20 21L9 21","key":"3"}),
    createElement('path', {"d":"M5 17L4 17","key":"4"}),
    createElement('path', {"d":"M5 21L4 21","key":"5"}),
    createElement('path', {"d":"M12 8C12 10.762 9.762 13 7 13C4.238 13 2 10.762 2 8C2 5.238 4.238 3 7 3C9.762 3 12 5.238 12 8Z","key":"6"}),
    createElement('path', {"d":"M7 6L7 8L9 8","key":"7"})
  );
});

ListClockDash.displayName = 'ListClockDash';

module.exports = ListClockDash;
module.exports.ListClockDash = ListClockDash;
module.exports.default = ListClockDash;
