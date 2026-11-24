'use strict';

const { createElement, forwardRef } = require('react');

const FilePushpin = forwardRef(function FilePushpin(
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
    createElement('path', {"d":"M15 13L11 17L12 18L16 14L15 13Z","key":"0"}),
    createElement('path', {"d":"M14 16L18 20","key":"1"}),
    createElement('path', {"d":"M20 12L20 7.984C20 7.354 19.75 6.75 19.304 6.304L15.696 2.696C15.25 2.25 14.646 2 14.016 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L11 22","key":"2"}),
    createElement('path', {"d":"M14 2L14 7C14 7.552 14.448 8 15 8L20 8","key":"3"})
  );
});

FilePushpin.displayName = 'FilePushpin';

module.exports = FilePushpin;
module.exports.FilePushpin = FilePushpin;
module.exports.default = FilePushpin;
