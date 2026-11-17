'use strict';

const { createElement, forwardRef } = require('react');

const NavigationDownRightSquare = forwardRef(function NavigationDownRightSquare(
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
    createElement('path', {"d":"M7.551 14.07L14.625 15.84C15.359 16.02 16.023 15.359 15.84 14.625L14.07 7.551C13.844 6.648 12.621 6.516 12.203 7.348L10.734 10.289C10.637 10.48 10.48 10.637 10.289 10.734L7.348 12.207C6.516 12.621 6.652 13.844 7.551 14.07Z","key":"0"}),
    createElement('path', {"d":"M2 5L2 19C2 20.656 3.344 22 5 22L19 22C20.656 22 22 20.656 22 19L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z","key":"1"})
  );
});

NavigationDownRightSquare.displayName = 'NavigationDownRightSquare';

module.exports = NavigationDownRightSquare;
module.exports.NavigationDownRightSquare = NavigationDownRightSquare;
module.exports.default = NavigationDownRightSquare;
