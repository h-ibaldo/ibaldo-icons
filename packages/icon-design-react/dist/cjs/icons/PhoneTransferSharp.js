'use strict';

const { createElement, forwardRef } = require('react');

const PhoneTransferSharp = forwardRef(function PhoneTransferSharp(
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
    createElement('path', {"d":"M9.094 7.977L9.129 8.074C10.234 11.25 12.742 13.734 15.926 14.813","key":"0"}),
    createElement('path', {"d":"M16.008 12.25L17.633 11.395L21.906 13.957L21.281 17.086C21.137 17.805 20.664 18.418 20.008 18.75C19.574 18.965 19.086 19.043 18.605 18.977L17.211 18.777C14.691 18.418 12.316 17.391 10.328 15.801C9.508 15.141 8.762 14.398 8.105 13.574C6.516 11.59 5.488 9.211 5.129 6.691L4.93 5.301C4.859 4.82 4.941 4.328 5.156 3.895C5.484 3.238 6.098 2.77 6.82 2.625L9.949 2L12.512 6.27L11.738 7.125","key":"1"}),
    createElement('path', {"d":"M16 5L22.441 5","key":"2"}),
    createElement('path', {"d":"M8.441 19L2 19","key":"3"}),
    createElement('path', {"d":"M19.441 2L22.441 5L19.441 8","key":"4"}),
    createElement('path', {"d":"M5 22L2 19L5 16","key":"5"})
  );
});

PhoneTransferSharp.displayName = 'PhoneTransferSharp';

module.exports = PhoneTransferSharp;
module.exports.PhoneTransferSharp = PhoneTransferSharp;
module.exports.default = PhoneTransferSharp;
