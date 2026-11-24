'use strict';

const { createElement, forwardRef } = require('react');

const PaperclipMinus = forwardRef(function PaperclipMinus(
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
    createElement('path', {"d":"M16 8L10 14C9.172 14.828 9.172 16.172 10 16.996L10.004 17C10.828 17.828 12.172 17.828 13 17L20.758 9.242C22.414 7.586 22.414 4.898 20.758 3.242C19.102 1.586 16.414 1.586 14.758 3.242L6.863 11.137C4.379 13.621 4.379 17.648 6.863 20.133L6.867 20.137C9.352 22.621 13.379 22.621 15.863 20.137L22 14","key":"0"}),
    createElement('path', {"d":"M3 4L8 4","key":"1"})
  );
});

PaperclipMinus.displayName = 'PaperclipMinus';

module.exports = PaperclipMinus;
module.exports.PaperclipMinus = PaperclipMinus;
module.exports.default = PaperclipMinus;
