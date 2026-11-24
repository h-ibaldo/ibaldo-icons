'use strict';

const { createElement, forwardRef } = require('react');

const ChatWarning = forwardRef(function ChatWarning(
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
    createElement('path', {"d":"M13.77 3.004L9.902 9.699C9.059 11.168 10.117 13 11.809 13L19.191 13C20.883 13 21.941 11.168 21.098 9.699L17.234 3.004C16.461 1.668 14.539 1.668 13.77 3.004Z","key":"0"}),
    createElement('path', {"d":"M15.5 7L15.5 6","key":"1"}),
    createElement('path', {"d":"M15.5 10L15.5 10","key":"2"}),
    createElement('path', {"d":"M9 3.367C4.941 4.387 2 7.418 2 11C2 13.84 3.855 16.328 6.645 17.75C6.664 18.895 6.391 20.078 5.719 21.113C5.48 21.48 5.766 21.973 6.195 21.898C8.313 21.535 9.781 20.23 10.715 18.926C11.137 18.969 11.563 19 12 19C14.531 19 16.836 18.242 18.598 17","key":"3"})
  );
});

ChatWarning.displayName = 'ChatWarning';

module.exports = ChatWarning;
module.exports.ChatWarning = ChatWarning;
module.exports.default = ChatWarning;
