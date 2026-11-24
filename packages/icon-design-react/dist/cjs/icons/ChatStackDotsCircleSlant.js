'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackDotsCircleSlant = forwardRef(function ChatStackDotsCircleSlant(
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
    createElement('path', {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L14 2","key":"0"}),
    createElement('path', {"d":"M2 14L2 15C2 16.656 3.344 18 5 18L7 18L7 22L13 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.695 17.164 6.598 16 6.184","key":"1"}),
    createElement('path', {"d":"M12 7C12 9.762 9.762 12 7 12C4.238 12 2 9.762 2 7C2 4.238 4.238 2 7 2C9.762 2 12 4.238 12 7Z","key":"2"}),
    createElement('path', {"d":"M5.5 7L5.5 7","key":"3"}),
    createElement('path', {"d":"M8.5 7L8.5 7","key":"4"})
  );
});

ChatStackDotsCircleSlant.displayName = 'ChatStackDotsCircleSlant';

module.exports = ChatStackDotsCircleSlant;
module.exports.ChatStackDotsCircleSlant = ChatStackDotsCircleSlant;
module.exports.default = ChatStackDotsCircleSlant;
