'use strict';

const { createElement, forwardRef } = require('react');

const BugOff = forwardRef(function BugOff(
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
    createElement('path', {"d":"M15 5L18 2","key":"0"}),
    createElement('path', {"d":"M18 12L21 11L21 8","key":"1"}),
    createElement('path', {"d":"M19.555 15L22 15","key":"2"}),
    createElement('path', {"d":"M6 12L3 11L3 8","key":"3"}),
    createElement('path', {"d":"M6 18L3 19L3 22","key":"4"}),
    createElement('path', {"d":"M6 15L2 15","key":"5"}),
    createElement('path', {"d":"M12 14L12 22.063","key":"6"}),
    createElement('path', {"d":"M2 2L21 22","key":"7"}),
    createElement('path', {"d":"M10.203 4.477C10.742 4.172 11.355 4 12 4C14.211 4 16 6.016 16 8.5C16 8.898 15.953 9.281 15.867 9.648M8 8.5C8 8.438 8 8.379 8.004 8.32L9.266 9.648L8.133 9.648C8.047 9.281 8 8.898 8 8.5Z","key":"8"}),
    createElement('path', {"d":"M13.887 8.352C15.484 8.969 16.789 10.352 17.473 12.133","key":"9"}),
    createElement('path', {"d":"M6 15C6 12.527 7.098 10.355 8.754 9.109L17.355 18.164C16.363 20.441 14.34 22 12 22C8.688 22 6 18.867 6 15Z","key":"10"})
  );
});

BugOff.displayName = 'BugOff';

module.exports = BugOff;
module.exports.BugOff = BugOff;
module.exports.default = BugOff;
