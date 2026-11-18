'use strict';

const { createElement, forwardRef } = require('react');

const DocumentListXCircle = forwardRef(function DocumentListXCircle(
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
    createElement('path', {"d":"M9 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L18 2C19.105 2 20 2.895 20 4L20 8","key":"0"}),
    createElement('path', {"d":"M6 7L6 7","key":"1"}),
    createElement('path', {"d":"M16 7L9 7","key":"2"}),
    createElement('path', {"d":"M6 12L6 12","key":"3"}),
    createElement('path', {"d":"M13 12L9 12","key":"4"}),
    createElement('path', {"d":"M6 17L6 17","key":"5"}),
    createElement('path', {"d":"M11 17L9 17","key":"6"}),
    createElement('path', {"d":"M18 15L15 18","key":"7"}),
    createElement('path', {"d":"M15 15L18 18","key":"8"}),
    createElement('path', {"d":"M11 16.5C11 13.461 13.461 11 16.5 11C19.539 11 22 13.461 22 16.5C22 19.539 19.539 22 16.5 22C13.461 22 11 19.539 11 16.5Z","key":"9"})
  );
});

DocumentListXCircle.displayName = 'DocumentListXCircle';

module.exports = DocumentListXCircle;
module.exports.DocumentListXCircle = DocumentListXCircle;
module.exports.default = DocumentListXCircle;
