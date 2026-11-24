'use strict';

const { createElement, forwardRef } = require('react');

const Contactless = forwardRef(function Contactless(
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
    createElement('path', {"d":"M5 10.023C6.148 11.172 6.148 13.035 5 14.184","key":"0"}),
    createElement('path', {"d":"M7.945 7.383C10.551 9.988 10.551 14.219 7.945 16.824","key":"1"}),
    createElement('path', {"d":"M10.887 4.59C15.035 8.738 15.035 15.469 10.887 19.617","key":"2"}),
    createElement('path', {"d":"M15 2.848C20.113 7.961 20.113 16.246 15 21.359","key":"3"})
  );
});

Contactless.displayName = 'Contactless';

module.exports = Contactless;
module.exports.Contactless = Contactless;
module.exports.default = Contactless;
