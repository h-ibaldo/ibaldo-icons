'use strict';

const { createElement, forwardRef } = require('react');

const TicketStackSlim = forwardRef(function TicketStackSlim(
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
    createElement('path', {"d":"M5.516 6.484L3.859 8.141L15.859 20.141L17.516 18.484C17.195 18.129 17 17.66 17 17.141C17 16.039 17.895 15.141 19 15.141C19.516 15.141 19.988 15.336 20.34 15.66L22 14L10 2L8.34 3.66C8.664 4.012 8.859 4.484 8.859 5C8.859 6.105 7.961 7 6.859 7C6.34 7 5.871 6.805 5.516 6.484Z","key":"0"}),
    createElement('path', {"d":"M2.859 12L12 21L14 19","key":"1"}),
    createElement('path', {"d":"M13.859 6L12.859 7","key":"2"}),
    createElement('path', {"d":"M8.859 11L7.859 12","key":"3"})
  );
});

TicketStackSlim.displayName = 'TicketStackSlim';

module.exports = TicketStackSlim;
module.exports.TicketStackSlim = TicketStackSlim;
module.exports.default = TicketStackSlim;
