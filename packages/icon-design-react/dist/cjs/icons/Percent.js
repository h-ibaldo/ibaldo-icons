'use strict';

const { createElement, forwardRef } = require('react');

const Percent = forwardRef(function Percent(
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
    createElement('path', {"d":"M4 20L20 4","key":"0"}),
    createElement('path', {"d":"M4 6.5C4 5.121 5.121 4 6.5 4C7.879 4 9 5.121 9 6.5C9 7.879 7.879 9 6.5 9C5.121 9 4 7.879 4 6.5Z","key":"1"}),
    createElement('path', {"d":"M15 17.5C15 16.121 16.121 15 17.5 15C18.879 15 20 16.121 20 17.5C20 18.879 18.879 20 17.5 20C16.121 20 15 18.879 15 17.5Z","key":"2"})
  );
});

Percent.displayName = 'Percent';

module.exports = Percent;
module.exports.Percent = Percent;
module.exports.default = Percent;
