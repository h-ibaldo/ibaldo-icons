'use strict';

const { createElement, forwardRef } = require('react');

const Hierarchy = forwardRef(function Hierarchy(
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
    createElement('path', {"d":"M14 2L14 8L10 8L10 2Z","key":"0"}),
    createElement('path', {"d":"M20 16L20 22L16 22L16 16Z","key":"1"}),
    createElement('path', {"d":"M8 16L8 22L4 22L4 16Z","key":"2"}),
    createElement('path', {"d":"M12 11L12 8","key":"3"}),
    createElement('path', {"d":"M18 16L18 13.723C18 13.289 17.723 12.906 17.316 12.773L12 11","key":"4"}),
    createElement('path', {"d":"M6 16L6 13.723C6 13.289 6.277 12.906 6.684 12.773L12 11","key":"5"})
  );
});

Hierarchy.displayName = 'Hierarchy';

module.exports = Hierarchy;
module.exports.Hierarchy = Hierarchy;
module.exports.default = Hierarchy;
