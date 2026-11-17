'use strict';

const { createElement, forwardRef } = require('react');

const Notebook = forwardRef(function Notebook(
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
    createElement('path', {"d":"M18 21L8 21C6.895 21 6 20.105 6 19L6 5C6 3.895 6.895 3 8 3L18 3C19.105 3 20 3.895 20 5L20 19C20 20.105 19.105 21 18 21Z","key":"0"}),
    createElement('path', {"d":"M4 7L8 7","key":"1"}),
    createElement('path', {"d":"M4 12L8 12","key":"2"}),
    createElement('path', {"d":"M4 17L8 17","key":"3"})
  );
});

Notebook.displayName = 'Notebook';

module.exports = Notebook;
module.exports.Notebook = Notebook;
module.exports.default = Notebook;
