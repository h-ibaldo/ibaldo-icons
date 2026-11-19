'use strict';

const { createElement, forwardRef } = require('react');

const FileLinesDashedCut = forwardRef(function FileLinesDashedCut(
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
    createElement('path', {"d":"M20 20L20 7.828C20 7.298 19.789 6.789 19.414 6.414L15.586 2.586C15.211 2.211 14.702 2 14.172 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L18 22C19.105 22 20 21.105 20 20Z","key":"0"}),
    createElement('path', {"d":"M8 14L16 14","key":"1"}),
    createElement('path', {"d":"M8 10L9 10","key":"2"}),
    createElement('path', {"d":"M12 10L16 10","key":"3"}),
    createElement('path', {"d":"M8 6L11 6","key":"4"}),
    createElement('path', {"d":"M8 18L12 18","key":"5"}),
    createElement('path', {"d":"M16 18L16 18","key":"6"})
  );
});

FileLinesDashedCut.displayName = 'FileLinesDashedCut';

module.exports = FileLinesDashedCut;
module.exports.FileLinesDashedCut = FileLinesDashedCut;
module.exports.default = FileLinesDashedCut;
