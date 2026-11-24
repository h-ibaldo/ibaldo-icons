'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackWarningFacing = forwardRef(function ChatStackWarningFacing(
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
    createElement('path', {"d":"M10 2L4 2C2.895 2 2 2.895 2 4L2 18L7 14","key":"0"}),
    createElement('path', {"d":"M8 17C8 18.105 8.895 19 10 19L17 19L22 22L22 16","key":"1"}),
    createElement('path', {"d":"M13.77 3L9.73 9.996C8.961 11.332 9.922 12.996 11.461 12.996L19.191 12.996C20.883 12.996 21.941 11.164 21.098 9.699L17.234 3C16.461 1.664 14.539 1.664 13.77 3Z","key":"2"}),
    createElement('path', {"d":"M15.5 6.996L15.5 5.996","key":"3"}),
    createElement('path', {"d":"M15.5 9.996L15.5 9.996","key":"4"})
  );
});

ChatStackWarningFacing.displayName = 'ChatStackWarningFacing';

module.exports = ChatStackWarningFacing;
module.exports.ChatStackWarningFacing = ChatStackWarningFacing;
module.exports.default = ChatStackWarningFacing;
