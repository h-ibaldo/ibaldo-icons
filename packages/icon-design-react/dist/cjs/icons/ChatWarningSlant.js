'use strict';

const { createElement, forwardRef } = require('react');

const ChatWarningSlant = forwardRef(function ChatWarningSlant(
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
    createElement('path', {"d":"M9 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L8 18L8 22L14 18L19 18C20.305 18 21.402 17.164 21.816 16","key":"3"})
  );
});

ChatWarningSlant.displayName = 'ChatWarningSlant';

module.exports = ChatWarningSlant;
module.exports.ChatWarningSlant = ChatWarningSlant;
module.exports.default = ChatWarningSlant;
