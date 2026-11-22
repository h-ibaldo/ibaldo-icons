'use strict';

const { createElement, forwardRef } = require('react');

const PencilRuler = forwardRef(function PencilRuler(
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
    createElement('path', {"d":"M9.824 4.176L8 6","key":"0"}),
    createElement('path', {"d":"M18 16L19.828 14.172","key":"1"}),
    createElement('path', {"d":"M19.242 2.586L21.414 4.758C22.195 5.539 22.195 6.805 21.414 7.586L9 20L2 22L4 15L16.414 2.586C17.195 1.805 18.461 1.805 19.242 2.586Z","key":"2"}),
    createElement('path', {"d":"M6.668 20.668L6.582 20.328C6.223 18.895 5.105 17.777 3.672 17.418L3.332 17.332","key":"3"}),
    createElement('path', {"d":"M14 5L19 10","key":"4"}),
    createElement('path', {"d":"M6.672 12.328L2.809 8.465C2.418 8.074 2.418 7.441 2.809 7.051L7.051 2.809C7.441 2.418 8.074 2.418 8.465 2.809L12.328 6.672","key":"5"}),
    createElement('path', {"d":"M17.328 11.672L21.191 15.535C21.582 15.926 21.582 16.559 21.191 16.949L16.949 21.191C16.559 21.582 15.926 21.582 15.535 21.191L11.672 17.328","key":"6"})
  );
});

PencilRuler.displayName = 'PencilRuler';

module.exports = PencilRuler;
module.exports.PencilRuler = PencilRuler;
module.exports.default = PencilRuler;
