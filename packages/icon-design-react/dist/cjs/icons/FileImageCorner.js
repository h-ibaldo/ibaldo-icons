'use strict';

const { createElement, forwardRef } = require('react');

const FileImageCorner = forwardRef(function FileImageCorner(
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
    createElement('path', {"d":"M16 2L16 7C16 7.552 16.448 8 17 8L22 8","key":"0"}),
    createElement('path', {"d":"M14 11C14 12.105 13.105 13 12 13C10.895 13 10 12.105 10 11C10 9.895 10.895 9 12 9C13.105 9 14 9.895 14 11Z","key":"1"}),
    createElement('path', {"d":"M21 21.723C21.595 21.376 22 20.738 22 20L22 7.984C22 7.354 21.75 6.75 21.304 6.304L17.696 2.696C17.25 2.25 16.646 2 16.016 2L8 2C6.895 2 6 2.895 6 4L6 10","key":"2"}),
    createElement('path', {"d":"M2 22L12 22L7 14L2 22Z","key":"3"}),
    createElement('path', {"d":"M12 22L17 22L13.5 17L11.057 20.491","key":"4"})
  );
});

FileImageCorner.displayName = 'FileImageCorner';

module.exports = FileImageCorner;
module.exports.FileImageCorner = FileImageCorner;
module.exports.default = FileImageCorner;
