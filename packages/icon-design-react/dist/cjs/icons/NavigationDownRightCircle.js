'use strict';

const { createElement, forwardRef } = require('react');

const NavigationDownRightCircle = forwardRef(function NavigationDownRightCircle(
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
    createElement('path', {"d":"M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12Z","key":"0"}),
    createElement('path', {"d":"M7.551 14.07L14.625 15.84C15.359 16.02 16.023 15.359 15.84 14.625L14.07 7.551C13.844 6.648 12.621 6.516 12.203 7.348L10.734 10.289C10.637 10.48 10.48 10.637 10.289 10.734L7.348 12.207C6.516 12.621 6.652 13.844 7.551 14.07Z","key":"1"})
  );
});

NavigationDownRightCircle.displayName = 'NavigationDownRightCircle';

module.exports = NavigationDownRightCircle;
module.exports.NavigationDownRightCircle = NavigationDownRightCircle;
module.exports.default = NavigationDownRightCircle;
