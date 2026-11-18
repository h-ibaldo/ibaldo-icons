'use strict';

const { createElement, forwardRef } = require('react');

const ChatSearchSlant = forwardRef(function ChatSearchSlant(
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
    createElement('path', {"d":"M15.02 9.5C15.02 11.434 13.449 13 11.52 13C9.582 13 8.02 11.434 8.02 9.5C8.02 7.566 9.582 6 11.52 6C13.449 6 15.02 7.566 15.02 9.5Z","key":"1"}),
    createElement('path', {"d":"M13.992 11.973L16.016 14","key":"2"})
  );
});

ChatSearchSlant.displayName = 'ChatSearchSlant';

module.exports = ChatSearchSlant;
module.exports.ChatSearchSlant = ChatSearchSlant;
module.exports.default = ChatSearchSlant;
