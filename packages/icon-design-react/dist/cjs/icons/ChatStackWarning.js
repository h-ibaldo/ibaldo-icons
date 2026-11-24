'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackWarning = forwardRef(function ChatStackWarning(
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
    createElement('path', {"d":"M8.613 15.445C9.672 17.469 12 18.898 14.73 18.988C16.211 20.141 18.383 21 21 21C20.34 20.34 19.691 19.242 19.316 17.715C20.949 16.617 22 14.918 22 13C22 9.859 19.188 7.289 15.605 7.027","key":"0"}),
    createElement('path', {"d":"M6.27 3.004L2.402 9.699C1.559 11.168 2.617 13 4.309 13L11.691 13C13.383 13 14.441 11.168 13.598 9.699L9.734 3.004C8.961 1.668 7.039 1.668 6.27 3.004Z","key":"1"}),
    createElement('path', {"d":"M8 7L8 6","key":"2"}),
    createElement('path', {"d":"M8 10L8 10","key":"3"})
  );
});

ChatStackWarning.displayName = 'ChatStackWarning';

module.exports = ChatStackWarning;
module.exports.ChatStackWarning = ChatStackWarning;
module.exports.default = ChatStackWarning;
