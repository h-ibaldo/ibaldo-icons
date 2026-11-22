'use strict';

const { createElement, forwardRef } = require('react');

const AlignTop = forwardRef(function AlignTop(
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
    createElement('path', {"d":"M22 2L2 2","key":"0"}),
    createElement('path', {"d":"M5.078 22L8.922 22C9.52 22 10 21.516 10 20.91L10 8.09C10 7.488 9.52 7 8.922 7L5.078 7C4.48 7 4 7.488 4 8.09L4 20.91C4 21.516 4.48 22 5.078 22Z","key":"1"}),
    createElement('path', {"d":"M15.098 16L18.906 16C19.512 16 20 15.523 20 14.938L20 8.059C20 7.473 19.512 7 18.906 7L15.098 7C14.492 7 14 7.473 14 8.059L14 14.938C14 15.523 14.492 16 15.098 16Z","key":"2"})
  );
});

AlignTop.displayName = 'AlignTop';

module.exports = AlignTop;
module.exports.AlignTop = AlignTop;
module.exports.default = AlignTop;
