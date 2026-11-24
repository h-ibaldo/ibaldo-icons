'use strict';

const { createElement, forwardRef } = require('react');

const LinkDotsCircleRound = forwardRef(function LinkDotsCircleRound(
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
    createElement('path', {"d":"M19 9.445C20.191 8.754 21 7.477 21 6C21 3.793 19.211 2 17 2L12 2C9.789 2 8 3.793 8 6C8 7.859 9.277 9.414 11 9.859","key":"0"}),
    createElement('path', {"d":"M12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17Z","key":"1"}),
    createElement('path', {"d":"M4 6.555C2.809 7.246 2 8.523 2 10C2 12.207 3.789 14 6 14L9 14","key":"2"}),
    createElement('path', {"d":"M14.859 9C14.496 7.602 13.402 6.504 12 6.141","key":"3"}),
    createElement('path', {"d":"M15.5 17L15.5 17","key":"4"}),
    createElement('path', {"d":"M18.5 17L18.5 17","key":"5"})
  );
});

LinkDotsCircleRound.displayName = 'LinkDotsCircleRound';

module.exports = LinkDotsCircleRound;
module.exports.LinkDotsCircleRound = LinkDotsCircleRound;
module.exports.default = LinkDotsCircleRound;
