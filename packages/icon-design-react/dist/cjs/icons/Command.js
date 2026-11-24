'use strict';

const { createElement, forwardRef } = require('react');

const Command = forwardRef(function Command(
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
    createElement('path', {"d":"M9 18L9 6C9 4.344 7.656 3 6 3C4.344 3 3 4.344 3 6C3 7.656 4.344 9 6 9L18 9C19.656 9 21 7.656 21 6C21 4.344 19.656 3 18 3C16.344 3 15 4.344 15 6L15 18C15 19.656 16.344 21 18 21C19.656 21 21 19.656 21 18C21 16.344 19.656 15 18 15L6 15C4.344 15 3 16.344 3 18C3 19.656 4.344 21 6 21C7.656 21 9 19.656 9 18Z","key":"0"})
  );
});

Command.displayName = 'Command';

module.exports = Command;
module.exports.Command = Command;
module.exports.default = Command;
