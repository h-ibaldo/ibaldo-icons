'use strict';

const { createElement, forwardRef } = require('react');

const MailClock = forwardRef(function MailClock(
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
    createElement('path', {"d":"M22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17Z","key":"0"}),
    createElement('path', {"d":"M17 15L17 17L19 18","key":"1"}),
    createElement('path', {"d":"M9 16L3 16C2.449 16 2 15.551 2 15L2 3C2 2.449 2.449 2 3 2L21 2C21.551 2 22 2.449 22 3L22 11","key":"2"}),
    createElement('path', {"d":"M2.332 2.266L11.375 9.5C11.742 9.793 12.258 9.793 12.625 9.5L21.668 2.266","key":"3"})
  );
});

MailClock.displayName = 'MailClock';

module.exports = MailClock;
module.exports.MailClock = MailClock;
module.exports.default = MailClock;
