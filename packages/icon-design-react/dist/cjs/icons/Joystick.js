'use strict';

const { createElement, forwardRef } = require('react');

const Joystick = forwardRef(function Joystick(
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
    createElement('path', {"d":"M9 5C9 3.344 10.344 2 12 2C13.656 2 15 3.344 15 5C15 6.656 13.656 8 12 8C10.344 8 9 6.656 9 5Z","key":"0"}),
    createElement('path', {"d":"M12 8L12 14","key":"1"}),
    createElement('path', {"d":"M15.555 11.777L20 14L12 19L4 14L8.445 11.777","key":"2"}),
    createElement('path', {"d":"M20 14L20 17L12 22L4 17L4 14","key":"3"})
  );
});

Joystick.displayName = 'Joystick';

module.exports = Joystick;
module.exports.Joystick = Joystick;
module.exports.default = Joystick;
