'use strict';

const { createElement, forwardRef } = require('react');

const LinkEditRound = forwardRef(function LinkEditRound(
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
    createElement('path', {"d":"M4 6.555C2.809 7.246 2 8.523 2 10C2 12.207 3.789 14 6 14L11 14C13.211 14 15 12.207 15 10C15 8.141 13.723 6.586 12 6.141","key":"0"}),
    createElement('path', {"d":"M19 9.445C20.191 8.754 21 7.477 21 6C21 3.793 19.211 2 17 2L12 2C9.789 2 8 3.793 8 6C8 7.859 9.277 9.414 11 9.859","key":"1"}),
    createElement('path', {"d":"M21.242 14.586C20.461 13.805 19.195 13.805 18.414 14.586L14 19L14 22L17 22L21.414 17.586C22.195 16.805 22.195 15.539 21.414 14.758Z","key":"2"})
  );
});

LinkEditRound.displayName = 'LinkEditRound';

module.exports = LinkEditRound;
module.exports.LinkEditRound = LinkEditRound;
module.exports.default = LinkEditRound;
