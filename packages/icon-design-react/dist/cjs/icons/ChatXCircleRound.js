'use strict';

const { createElement, forwardRef } = require('react');

const ChatXCircleRound = forwardRef(function ChatXCircleRound(
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
    createElement('path', {"d":"M22 7.5C22 10.539 19.535 13 16.5 13C13.465 13 11 10.539 11 7.5C11 4.461 13.465 2 16.5 2C19.535 2 22 4.461 22 7.5Z","key":"0"}),
    createElement('path', {"d":"M14.75 9.25L18.25 5.75","key":"1"}),
    createElement('path', {"d":"M18.25 9.25L14.75 5.75","key":"2"}),
    createElement('path', {"d":"M9 2.465C4.945 3.738 2 7.523 2 12C2 14.625 3.02 17.008 4.676 18.789L2 22L12 22C16.477 22 20.262 19.055 21.535 15","key":"3"})
  );
});

ChatXCircleRound.displayName = 'ChatXCircleRound';

module.exports = ChatXCircleRound;
module.exports.ChatXCircleRound = ChatXCircleRound;
module.exports.default = ChatXCircleRound;
