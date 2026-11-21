'use strict';

const { createElement, forwardRef } = require('react');

const MegaphoneRays = forwardRef(function MegaphoneRays(
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
    createElement('path', {"d":"M22 4L19 7","key":"0"}),
    createElement('path', {"d":"M19 15L22 18","key":"1"}),
    createElement('path', {"d":"M19 11L22 11","key":"2"}),
    createElement('path', {"d":"M16 17.277L16 4.723C16 3.957 15.172 3.473 14.504 3.855L12.039 5.262C10.047 6.402 7.793 7 5.5 7C3.566 7 2 8.566 2 10.5L2 11.5C2 13.434 3.566 15 5.5 15C7.793 15 10.047 15.598 12.039 16.738L14.504 18.145C15.172 18.527 16 18.043 16 17.277Z","key":"3"}),
    createElement('path', {"d":"M8.375 15.316L9.637 19.727C9.82 20.363 9.34 21 8.676 21L6.754 21C6.309 21 5.914 20.703 5.793 20.273L4.215 14.758","key":"4"}),
    createElement('path', {"d":"M10 12C10 10.895 10.895 10 12 10C13.105 10 14 10.895 14 12C14 13.105 13.105 14 12 14C10.895 14 10 13.105 10 12Z","key":"5"})
  );
});

MegaphoneRays.displayName = 'MegaphoneRays';

module.exports = MegaphoneRays;
module.exports.MegaphoneRays = MegaphoneRays;
module.exports.default = MegaphoneRays;
