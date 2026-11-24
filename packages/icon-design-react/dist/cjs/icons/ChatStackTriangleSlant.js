'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackTriangleSlant = forwardRef(function ChatStackTriangleSlant(
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
    createElement('path', {"d":"M10.352 11L3.648 11C2.484 11 1.762 9.73 2.363 8.73L5.715 3.145C6.297 2.172 7.703 2.172 8.285 3.145L11.637 8.73C12.238 9.73 11.516 11 10.352 11Z","key":"0"}),
    createElement('path', {"d":"M2 14L2 15C2 16.656 3.344 18 5 18L7 18L7 22L13 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.344 16.656 6 15 6L14 6","key":"1"}),
    createElement('path', {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L12 2","key":"2"})
  );
});

ChatStackTriangleSlant.displayName = 'ChatStackTriangleSlant';

module.exports = ChatStackTriangleSlant;
module.exports.ChatStackTriangleSlant = ChatStackTriangleSlant;
module.exports.default = ChatStackTriangleSlant;
