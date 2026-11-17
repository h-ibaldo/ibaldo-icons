'use strict';

const { createElement, forwardRef } = require('react');

const ChatStarCornerBoxy = forwardRef(function ChatStarCornerBoxy(
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
    createElement('path', {"d":"M10 2L5 2C3.344 2 2 3.344 2 5L2 22L7 18L19 18C20.656 18 22 16.656 22 15L22 14","key":"0"}),
    createElement('path', {"d":"M16.426 2.266L17.785 5.02L20.828 5.461C21.215 5.52 21.371 5.996 21.09 6.27L18.887 8.414L19.41 11.445C19.473 11.832 19.066 12.129 18.719 11.945L16 10.516L13.281 11.945C12.934 12.129 12.523 11.832 12.594 11.445L13.109 8.414L10.91 6.27C10.629 5.996 10.785 5.52 11.176 5.461L14.215 5.02L15.574 2.266C15.75 1.91 16.25 1.91 16.426 2.266Z","key":"1"})
  );
});

ChatStarCornerBoxy.displayName = 'ChatStarCornerBoxy';

module.exports = ChatStarCornerBoxy;
module.exports.ChatStarCornerBoxy = ChatStarCornerBoxy;
module.exports.default = ChatStarCornerBoxy;
