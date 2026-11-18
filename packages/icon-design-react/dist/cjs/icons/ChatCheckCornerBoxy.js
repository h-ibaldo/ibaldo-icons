'use strict';

const { createElement, forwardRef } = require('react');

const ChatCheckCornerBoxy = forwardRef(function ChatCheckCornerBoxy(
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
    createElement('path', {"d":"M12 2L5 2C3.344 2 2 3.344 2 5L2 22L7 18L19 18C20.656 18 22 16.656 22 15L22 9","key":"0"}),
    createElement('path', {"d":"M16 4L17.5 6L22 2","key":"1"})
  );
});

ChatCheckCornerBoxy.displayName = 'ChatCheckCornerBoxy';

module.exports = ChatCheckCornerBoxy;
module.exports.ChatCheckCornerBoxy = ChatCheckCornerBoxy;
module.exports.default = ChatCheckCornerBoxy;
