'use strict';

const { createElement, forwardRef } = require('react');

const PhoneVoicemail = forwardRef(function PhoneVoicemail(
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
    createElement('path', {"d":"M7.348 18.785L5.145 16.582C3.855 15.293 2.883 13.723 2.309 11.992C1.754 10.328 1.953 8.508 2.855 7.008L3.477 5.973C3.84 5.367 4.488 5 5.191 5L5.613 5C6.281 5 6.906 5.336 7.277 5.891L8.926 8.363C9.594 9.363 9.23 10.723 8.156 11.262L6.684 11.996L6.941 12.516C7.91 14.449 9.48 16.02 11.414 16.988L11.93 17.246L12.668 15.773C13.207 14.695 14.566 14.336 15.566 15.004L18.039 16.652C18.594 17.023 18.93 17.648 18.93 18.316L18.93 18.738C18.93 19.438 18.559 20.09 17.957 20.453L16.922 21.074C15.418 21.973 13.598 22.176 11.938 21.621C10.207 21.043 8.637 20.074 7.348 18.785Z","key":"0"}),
    createElement('path', {"d":"M11 5C11 3.895 11.895 3 13 3C14.105 3 15 3.895 15 5C15 6.105 14.105 7 13 7C11.895 7 11 6.105 11 5Z","key":"1"}),
    createElement('path', {"d":"M18 5C18 3.895 18.895 3 20 3C21.105 3 22 3.895 22 5C22 6.105 21.105 7 20 7C18.895 7 18 6.105 18 5Z","key":"2"}),
    createElement('path', {"d":"M13 7L20 7","key":"3"})
  );
});

PhoneVoicemail.displayName = 'PhoneVoicemail';

module.exports = PhoneVoicemail;
module.exports.PhoneVoicemail = PhoneVoicemail;
module.exports.default = PhoneVoicemail;
