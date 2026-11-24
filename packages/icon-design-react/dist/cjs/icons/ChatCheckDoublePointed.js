'use strict';

const { createElement, forwardRef } = require('react');

const ChatCheckDoublePointed = forwardRef(function ChatCheckDoublePointed(
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
    createElement('path', {"d":"M17.68 17.52L10 22L10 17L9 17C5.133 17 2 13.867 2 10C2 6.133 5.133 3 9 3L15 3C18.867 3 22 6.133 22 10C22 13.094 20.355 15.957 17.68 17.52Z","key":"0"}),
    createElement('path', {"d":"M7 9L8.5 11L13 7","key":"1"}),
    createElement('path', {"d":"M11.801 12.066L12.5 13L17 9","key":"2"})
  );
});

ChatCheckDoublePointed.displayName = 'ChatCheckDoublePointed';

module.exports = ChatCheckDoublePointed;
module.exports.ChatCheckDoublePointed = ChatCheckDoublePointed;
module.exports.default = ChatCheckDoublePointed;
