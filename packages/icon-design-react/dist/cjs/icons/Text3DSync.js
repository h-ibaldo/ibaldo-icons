'use strict';

const { createElement, forwardRef } = require('react');

const Text3DSync = forwardRef(function Text3DSync(
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
    createElement('path', {"d":"M14 9L14 15C15.656 15 17 13.656 17 12C17 10.344 15.656 9 14 9Z","key":"0"}),
    createElement('path', {"d":"M9.5 9C10.328 9 11 9.672 11 10.5C11 11.328 10.328 12 9.5 12","key":"1"}),
    createElement('path', {"d":"M9.5 12C10.328 12 11 12.672 11 13.5C11 14.328 10.328 15 9.5 15","key":"2"}),
    createElement('path', {"d":"M9.5 9L8 9","key":"3"}),
    createElement('path', {"d":"M9.5 12L9 12","key":"4"}),
    createElement('path', {"d":"M9.5 15L8 15","key":"5"}),
    createElement('path', {"d":"M20 3L20 6L17 6","key":"6"}),
    createElement('path', {"d":"M4 21L4 18L7 18","key":"7"}),
    createElement('path', {"d":"M12 22C17.523 22 22 17.523 22 12C22 11.316 21.93 10.645 21.801 10","key":"8"}),
    createElement('path', {"d":"M19.984 6C18.16 3.574 15.27 2 12 2","key":"9"}),
    createElement('path', {"d":"M12 2C6.477 2 2 6.477 2 12C2 12.684 2.07 13.355 2.199 14","key":"10"}),
    createElement('path', {"d":"M4.016 18C5.84 20.426 8.73 22 12 22","key":"11"})
  );
});

Text3DSync.displayName = 'Text3DSync';

module.exports = Text3DSync;
module.exports.Text3DSync = Text3DSync;
module.exports.default = Text3DSync;
