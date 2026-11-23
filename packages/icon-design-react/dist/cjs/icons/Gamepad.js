'use strict';

const { createElement, forwardRef } = require('react');

const Gamepad = forwardRef(function Gamepad(
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
    createElement('path', {"d":"M12 6C9 6 8.223 4 6 4C2.301 4 2.012 13.074 2 15C1.988 16.926 2.805 19.012 5 19C7.195 18.988 9.309 15 12 15","key":"0"}),
    createElement('path', {"d":"M12 6C15 6 15.777 4 18 4C21.699 4 21.988 13.074 22 15C22.012 16.926 21.195 19.012 19 19C16.805 18.988 14.691 15 12 15","key":"1"}),
    createElement('path', {"d":"M5 11L9 11","key":"2"}),
    createElement('path', {"d":"M7 9L7 13","key":"3"}),
    createElement('path', {"d":"M17 9L17 9","key":"4"}),
    createElement('path', {"d":"M17 13L17 13","key":"5"}),
    createElement('path', {"d":"M19 11L19 11","key":"6"}),
    createElement('path', {"d":"M15 11L15 11","key":"7"})
  );
});

Gamepad.displayName = 'Gamepad';

module.exports = Gamepad;
module.exports.Gamepad = Gamepad;
module.exports.default = Gamepad;
