'use strict';

const { createElement, forwardRef } = require('react');

const PhoneHash = forwardRef(function PhoneHash(
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
    createElement('path', {"d":"M7.438 18.781L5.234 16.578C3.949 15.289 2.977 13.719 2.402 11.988C1.848 10.328 2.047 8.508 2.949 7.004L3.57 5.973C3.93 5.367 4.582 5 5.285 5L5.703 5C6.371 5 6.996 5.336 7.367 5.891L9.016 8.359C9.684 9.363 9.32 10.723 8.246 11.258L6.773 11.996L7.031 12.512C8 14.445 9.57 16.016 11.504 16.984L12.02 17.242L12.758 15.77C13.293 14.695 14.652 14.332 15.656 15L18.125 16.648C18.68 17.02 19.016 17.645 19.016 18.313L19.016 18.73C19.016 19.434 18.648 20.086 18.043 20.449L17.012 21.066C15.508 21.969 13.688 22.168 12.027 21.617C10.297 21.039 8.727 20.07 7.438 18.781Z","key":"0"}),
    createElement('path', {"d":"M16 2L14 10","key":"1"}),
    createElement('path', {"d":"M20 2L18 10","key":"2"}),
    createElement('path', {"d":"M22 4L13 4","key":"3"}),
    createElement('path', {"d":"M21 8L12 8","key":"4"})
  );
});

PhoneHash.displayName = 'PhoneHash';

module.exports = PhoneHash;
module.exports.PhoneHash = PhoneHash;
module.exports.default = PhoneHash;
