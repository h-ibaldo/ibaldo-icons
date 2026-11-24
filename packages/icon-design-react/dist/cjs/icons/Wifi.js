'use strict';

const { createElement, forwardRef } = require('react');

const Wifi = forwardRef(function Wifi(
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
    createElement('path', {"d":"M2.387 7.777C8.238 4.074 15.762 4.074 21.613 7.777","key":"0"}),
    createElement('path', {"d":"M5.59 11.852C9.492 9.383 14.508 9.383 18.41 11.852","key":"1"}),
    createElement('path', {"d":"M8.797 15.926C10.746 14.691 13.254 14.691 15.203 15.926","key":"2"}),
    createElement('path', {"d":"M12 20L12 20","key":"3"})
  );
});

Wifi.displayName = 'Wifi';

module.exports = Wifi;
module.exports.Wifi = Wifi;
module.exports.default = Wifi;
