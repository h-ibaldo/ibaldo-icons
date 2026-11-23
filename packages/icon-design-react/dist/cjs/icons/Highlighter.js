'use strict';

const { createElement, forwardRef } = require('react');

const Highlighter = forwardRef(function Highlighter(
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
    createElement('path', {"d":"M2 22L8 22L10 20L7 17Z","key":"0"}),
    createElement('path', {"d":"M8 22L21 22","key":"1"}),
    createElement('path', {"d":"M22 14L19.414 16.586C18.633 17.367 17.367 17.367 16.586 16.586L10.414 10.414C9.633 9.633 9.633 8.367 10.414 7.586L16 2","key":"2"}),
    createElement('path', {"d":"M17.145 17.145L12 18L10 20L7 17L9 15L9.855 9.855","key":"3"})
  );
});

Highlighter.displayName = 'Highlighter';

module.exports = Highlighter;
module.exports.Highlighter = Highlighter;
module.exports.default = Highlighter;
