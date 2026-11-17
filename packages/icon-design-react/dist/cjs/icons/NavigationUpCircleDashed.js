'use strict';

const { createElement, forwardRef } = require('react');

const NavigationUpCircleDashed = forwardRef(function NavigationUpCircleDashed(
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
    createElement('path', {"d":"M3.66 17.512C4.402 18.633 5.363 19.598 6.488 20.34","key":"0"}),
    createElement('path', {"d":"M2.203 10C2.07 10.645 2 11.316 2 12C2 12.684 2.07 13.355 2.203 14","key":"1"}),
    createElement('path', {"d":"M6.488 3.66C5.367 4.402 4.402 5.363 3.66 6.488","key":"2"}),
    createElement('path', {"d":"M20.34 17.512C19.598 18.633 18.633 19.598 17.512 20.34","key":"3"}),
    createElement('path', {"d":"M21.797 10C21.93 10.645 22 11.316 22 12C22 12.684 21.93 13.355 21.797 14","key":"4"}),
    createElement('path', {"d":"M14 2.203C13.355 2.07 12.684 2 12 2C11.316 2 10.645 2.07 10 2.203","key":"5"}),
    createElement('path', {"d":"M14 21.797C13.355 21.93 12.684 22 12 22C11.316 22 10.645 21.93 10 21.797","key":"6"}),
    createElement('path', {"d":"M17.512 3.66C18.633 4.402 19.598 5.363 20.34 6.488","key":"7"}),
    createElement('path', {"d":"M7.391 13.68L11.145 7.43C11.531 6.781 12.469 6.781 12.859 7.43L16.609 13.68C17.086 14.48 16.316 15.438 15.438 15.145L12.316 14.105C12.113 14.035 11.887 14.035 11.684 14.105L8.566 15.145C7.684 15.438 6.914 14.48 7.391 13.68Z","key":"8"})
  );
});

NavigationUpCircleDashed.displayName = 'NavigationUpCircleDashed';

module.exports = NavigationUpCircleDashed;
module.exports.NavigationUpCircleDashed = NavigationUpCircleDashed;
module.exports.default = NavigationUpCircleDashed;
