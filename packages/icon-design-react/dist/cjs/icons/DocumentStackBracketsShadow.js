'use strict';

const { createElement, forwardRef } = require('react');

const DocumentStackBracketsShadow = forwardRef(function DocumentStackBracketsShadow(
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
    createElement('path', {"d":"M20 12L20 8C20 6.895 19.105 6 18 6L8 6C6.895 6 6 6.895 6 8L6 20C6 21.105 6.895 22 8 22","key":"0"}),
    createElement('path', {"d":"M2 17L2 4C2 2.895 2.895 2 4 2L14 2","key":"1"}),
    createElement('path', {"d":"M14 16L11 19L14 22","key":"2"}),
    createElement('path', {"d":"M19 16L22 19L19 22","key":"3"})
  );
});

DocumentStackBracketsShadow.displayName = 'DocumentStackBracketsShadow';

module.exports = DocumentStackBracketsShadow;
module.exports.DocumentStackBracketsShadow = DocumentStackBracketsShadow;
module.exports.default = DocumentStackBracketsShadow;
