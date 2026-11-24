'use strict';

const { createElement, forwardRef } = require('react');

const Eject = forwardRef(function Eject(
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
    createElement('path', {"d":"M19.082 16L4.918 16C3.68 16 2.938 14.629 3.609 13.59L10.691 2.707C11.309 1.766 12.691 1.766 13.309 2.707L20.391 13.59C21.063 14.629 20.32 16 19.082 16Z","key":"0"}),
    createElement('path', {"d":"M20 22L4 22","key":"1"})
  );
});

Eject.displayName = 'Eject';

module.exports = Eject;
module.exports.Eject = Eject;
module.exports.default = Eject;
