'use strict';

const { createElement, forwardRef } = require('react');

const ChatRaysSide = forwardRef(function ChatRaysSide(
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
    createElement('path', {"d":"M7 17L20 17C21.105 17 22 16.105 22 15L22 9C22 7.895 21.105 7 20 7L7 7C5.895 7 5 7.895 5 9L5 10L2 12L5 14L5 15C5 16.105 5.895 17 7 17Z","key":"0"}),
    createElement('path', {"d":"M13 2L13 4","key":"1"}),
    createElement('path', {"d":"M5 2L7 4","key":"2"}),
    createElement('path', {"d":"M21 2L19 4","key":"3"}),
    createElement('path', {"d":"M13 22L13 20","key":"4"}),
    createElement('path', {"d":"M21 22L19 20","key":"5"}),
    createElement('path', {"d":"M5 22L7 20","key":"6"})
  );
});

ChatRaysSide.displayName = 'ChatRaysSide';

module.exports = ChatRaysSide;
module.exports.ChatRaysSide = ChatRaysSide;
module.exports.default = ChatRaysSide;
