'use strict';

const { createElement, forwardRef } = require('react');

const ArrowLeftCircleJoined = forwardRef(function ArrowLeftCircleJoined(
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
    createElement('path', {"d":"M13 9L10 12L13 15","key":"0"}),
    createElement('path', {"d":"M20.652 17C18.766 20.254 15.109 22.352 10.996 21.949C6.367 21.5 2.574 17.762 2.063 13.141C1.395 7.105 6.102 2 12 2C15.992 2 19.438 4.34 21.039 7.723C21.98 9.707 20.516 12 18.32 12L10 12","key":"1"})
  );
});

ArrowLeftCircleJoined.displayName = 'ArrowLeftCircleJoined';

module.exports = ArrowLeftCircleJoined;
module.exports.ArrowLeftCircleJoined = ArrowLeftCircleJoined;
module.exports.default = ArrowLeftCircleJoined;
