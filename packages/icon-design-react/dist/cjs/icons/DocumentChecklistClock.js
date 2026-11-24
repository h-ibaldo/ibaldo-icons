'use strict';

const { createElement, forwardRef } = require('react');

const DocumentChecklistClock = forwardRef(function DocumentChecklistClock(
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
    createElement('path', {"d":"M10 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L18 2C19.105 2 20 2.895 20 4L20 9","key":"0"}),
    createElement('path', {"d":"M16 7L12 7","key":"1"}),
    createElement('path', {"d":"M6 7L7 8L9 6","key":"2"}),
    createElement('path', {"d":"M6 12L7 13L9 11","key":"3"}),
    createElement('path', {"d":"M6 17L7 18L9 16","key":"4"}),
    createElement('path', {"d":"M22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17Z","key":"5"}),
    createElement('path', {"d":"M19 17L17 17L17 15","key":"6"})
  );
});

DocumentChecklistClock.displayName = 'DocumentChecklistClock';

module.exports = DocumentChecklistClock;
module.exports.DocumentChecklistClock = DocumentChecklistClock;
module.exports.default = DocumentChecklistClock;
