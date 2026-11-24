'use strict';

const { createElement, forwardRef } = require('react');

const NodesRing = forwardRef(function NodesRing(
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
    createElement('path', {"d":"M9 6C9 4.344 10.344 3 12 3C13.656 3 15 4.344 15 6C15 7.656 13.656 9 12 9C10.344 9 9 7.656 9 6Z","key":"0"}),
    createElement('path', {"d":"M2 18C2 16.344 3.344 15 5 15C6.656 15 8 16.344 8 18C8 19.656 6.656 21 5 21C3.344 21 2 19.656 2 18Z","key":"1"}),
    createElement('path', {"d":"M16 18C16 16.344 17.344 15 19 15C20.656 15 22 16.344 22 18C22 19.656 20.656 21 19 21C17.344 21 16 19.656 16 18Z","key":"2"}),
    createElement('path', {"d":"M14.93 6.641C17.332 7.75 19 10.18 19 13C19 13.699 18.898 14.375 18.707 15.016","key":"3"}),
    createElement('path', {"d":"M16.078 18.688C14.93 19.516 13.523 20 12 20C10.477 20 9.07 19.516 7.922 18.688","key":"4"}),
    createElement('path', {"d":"M5.293 15.016C5.102 14.375 5 13.699 5 13C5 10.18 6.668 7.75 9.07 6.641","key":"5"})
  );
});

NodesRing.displayName = 'NodesRing';

module.exports = NodesRing;
module.exports.NodesRing = NodesRing;
module.exports.default = NodesRing;
