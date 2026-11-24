'use strict';

const { createElement, forwardRef } = require('react');

const ChatLaughSlant = forwardRef(function ChatLaughSlant(
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
    createElement('path', {"d":"M2 5L2 15C2 16.656 3.344 18 5 18L8 18L8 22L14 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z","key":"0"}),
    createElement('path', {"d":"M9 11L15 11C15 12.656 13.656 14 12 14C10.344 14 9 12.656 9 11Z","key":"1"}),
    createElement('path', {"d":"M14.5 8C14.223 8 14 7.777 14 7.5C14 7.223 14.223 7 14.5 7C14.777 7 15 7.223 15 7.5C15 7.777 14.777 8 14.5 8Z","key":"2"}),
    createElement('path', {"d":"M9.5 8C9.223 8 9 7.777 9 7.5C9 7.223 9.223 7 9.5 7C9.777 7 10 7.223 10 7.5C10 7.777 9.777 8 9.5 8Z","key":"3"})
  );
});

ChatLaughSlant.displayName = 'ChatLaughSlant';

module.exports = ChatLaughSlant;
module.exports.ChatLaughSlant = ChatLaughSlant;
module.exports.default = ChatLaughSlant;
