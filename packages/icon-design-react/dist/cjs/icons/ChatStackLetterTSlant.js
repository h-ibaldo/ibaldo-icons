'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackLetterTSlant = forwardRef(function ChatStackLetterTSlant(
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
    createElement('path', {"d":"M2 9L2 15C2 16.656 3.344 18 5 18L7 18L7 22L13 18L15 18C16.656 18 18 16.656 18 15L18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9Z","key":"0"}),
    createElement('path', {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L7 2","key":"1"}),
    createElement('path', {"d":"M8.5 9L8.5 13C8.5 14.105 9.395 15 10.5 15L11.5 15","key":"2"}),
    createElement('path', {"d":"M11.5 11L8.5 11","key":"3"})
  );
});

ChatStackLetterTSlant.displayName = 'ChatStackLetterTSlant';

module.exports = ChatStackLetterTSlant;
module.exports.ChatStackLetterTSlant = ChatStackLetterTSlant;
module.exports.default = ChatStackLetterTSlant;
