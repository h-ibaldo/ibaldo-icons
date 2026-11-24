'use strict';

const { createElement, forwardRef } = require('react');

const Gift = forwardRef(function Gift(
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
    createElement('path', {"d":"M3 13L21 13L21 21C21 21.551 20.551 22 20 22L4 22C3.449 22 3 21.551 3 21Z","key":"0"}),
    createElement('path', {"d":"M3 13L21 13C21.551 13 22 12.551 22 12L22 9C22 8.449 21.551 8 21 8L3 8C2.449 8 2 8.449 2 9L2 12C2 12.551 2.449 13 3 13Z","key":"1"}),
    createElement('path', {"d":"M12 8L12 22","key":"2"}),
    createElement('path', {"d":"M9 2C10.656 2 12 3.344 12 5L12 8L9 8C7.344 8 6 6.656 6 5C6 3.344 7.344 2 9 2Z","key":"3"}),
    createElement('path', {"d":"M15 2C13.344 2 12 3.344 12 5L12 8L15 8C16.656 8 18 6.656 18 5C18 3.344 16.656 2 15 2Z","key":"4"})
  );
});

Gift.displayName = 'Gift';

module.exports = Gift;
module.exports.Gift = Gift;
module.exports.default = Gift;
