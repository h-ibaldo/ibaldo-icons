'use strict';

const { createElement, forwardRef } = require('react');

const TicketCheckFolded = forwardRef(function TicketCheckFolded(
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
    createElement('path', {"d":"M6 8L6 10","key":"0"}),
    createElement('path', {"d":"M6 13L6 14","key":"1"}),
    createElement('path', {"d":"M6 17L6 18","key":"2"}),
    createElement('path', {"d":"M2 8L22 8L22 20L2 20Z","key":"3"}),
    createElement('path', {"d":"M2 8L19 3L19 8","key":"4"}),
    createElement('path', {"d":"M10 16L12 17L18 11","key":"5"}),
    createElement('path', {"d":"M10 13L16 13","key":"6"})
  );
});

TicketCheckFolded.displayName = 'TicketCheckFolded';

module.exports = TicketCheckFolded;
module.exports.TicketCheckFolded = TicketCheckFolded;
module.exports.default = TicketCheckFolded;
