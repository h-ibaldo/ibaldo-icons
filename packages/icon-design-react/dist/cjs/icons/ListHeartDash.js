'use strict';

const { createElement, forwardRef } = require('react');

const ListHeartDash = forwardRef(function ListHeartDash(
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
    createElement('path', {"d":"M8 4L18 4","key":"0"}),
    createElement('path', {"d":"M8 9L18 9","key":"1"}),
    createElement('path', {"d":"M3 4L4 4","key":"2"}),
    createElement('path', {"d":"M3 9L4 9","key":"3"}),
    createElement('path', {"d":"M8 14L11 14","key":"4"}),
    createElement('path', {"d":"M3 14L4 14","key":"5"}),
    createElement('path', {"d":"M17.293 21.414L14.5 18.621C13.672 17.793 13.672 16.449 14.5 15.621C15.328 14.793 16.672 14.793 17.5 15.621L18 16.121L18.5 15.621C19.328 14.793 20.672 14.793 21.5 15.621C22.328 16.449 22.328 17.793 21.5 18.621L18.707 21.414C18.316 21.805 17.684 21.805 17.293 21.414Z","key":"6"})
  );
});

ListHeartDash.displayName = 'ListHeartDash';

module.exports = ListHeartDash;
module.exports.ListHeartDash = ListHeartDash;
module.exports.default = ListHeartDash;
