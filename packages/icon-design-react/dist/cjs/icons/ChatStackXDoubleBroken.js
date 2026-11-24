'use strict';

const { createElement, forwardRef } = require('react');

const ChatStackXDoubleBroken = forwardRef(function ChatStackXDoubleBroken(
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
    createElement('path', {"d":"M17 2L5 2C3.344 2 2 3.344 2 5L2 13","key":"0"}),
    createElement('path', {"d":"M14 22L17 18L19 18C20.656 18 22 16.656 22 15L22 9C22 7.344 20.656 6 19 6L9 6C7.344 6 6 7.344 6 9L6 15C6 16.656 7.344 18 9 18L11 18","key":"1"}),
    createElement('path', {"d":"M10 13L12 11","key":"2"}),
    createElement('path', {"d":"M12 13L10 11","key":"3"}),
    createElement('path', {"d":"M16 13L18 11","key":"4"}),
    createElement('path', {"d":"M18 13L16 11","key":"5"})
  );
});

ChatStackXDoubleBroken.displayName = 'ChatStackXDoubleBroken';

module.exports = ChatStackXDoubleBroken;
module.exports.ChatStackXDoubleBroken = ChatStackXDoubleBroken;
module.exports.default = ChatStackXDoubleBroken;
