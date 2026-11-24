'use strict';

const { createElement, forwardRef } = require('react');

const EarPulse = forwardRef(function EarPulse(
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
    createElement('path', {"d":"M18 9L18 8.5C18 7.119 16.881 6 15.5 6L15.5 6C14.119 6 13 7.119 13 8.5L13 11L13 11C14.105 11 15 11.895 15 13L15 13C15 14.105 14.105 15 13 15L13 15","key":"0"}),
    createElement('path', {"d":"M2 13L3 13L5 10L7 16L9 13L10 13","key":"1"}),
    createElement('path', {"d":"M9.564 20C10.254 21.191 11.524 22 13 22C15.209 22 17 20.209 17 18C17 16.719 17.509 15.491 18.414 14.586L20.232 12.768C21.364 11.636 22 10.101 22 8.5C22 4.91 19.09 2 15.5 2C12.427 2 9.859 4.135 9.181 7","key":"2"})
  );
});

EarPulse.displayName = 'EarPulse';

module.exports = EarPulse;
module.exports.EarPulse = EarPulse;
module.exports.default = EarPulse;
