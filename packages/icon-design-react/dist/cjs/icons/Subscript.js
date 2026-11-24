'use strict';

const { createElement, forwardRef } = require('react');

const Subscript = forwardRef(function Subscript(
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
    createElement('path', {"d":"M2 2L12 17","key":"0"}),
    createElement('path', {"d":"M12 2L2 17","key":"1"}),
    createElement('path', {"d":"M16 15.027C16 13.906 16.906 13 18.027 13L18.973 13C20.094 13 21 13.906 21 15.027C21 15.641 20.719 16.223 20.238 16.609L17.563 18.75C16.574 19.539 16 20.734 16 22L21 22","key":"2"})
  );
});

Subscript.displayName = 'Subscript';

module.exports = Subscript;
module.exports.Subscript = Subscript;
module.exports.default = Subscript;
