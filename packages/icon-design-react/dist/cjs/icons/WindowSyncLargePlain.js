'use strict';

const { createElement, forwardRef } = require('react');

const WindowSyncLargePlain = forwardRef(function WindowSyncLargePlain(
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
    createElement('path', {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z","key":"0"}),
    createElement('path', {"d":"M2 8L22 8","key":"1"}),
    createElement('path', {"d":"M14 15L16 17L18 15","key":"2"}),
    createElement('path', {"d":"M10 15L8 13L6 15","key":"3"}),
    createElement('path', {"d":"M15.641 16.641C15.867 16.137 16 15.586 16 15C16 12.789 14.211 11 12 11C11.652 11 11.32 11.063 11 11.152","key":"4"}),
    createElement('path', {"d":"M8.359 13.359C8.133 13.863 8 14.414 8 15C8 17.211 9.789 19 12 19C12.348 19 12.68 18.938 13 18.848","key":"5"})
  );
});

WindowSyncLargePlain.displayName = 'WindowSyncLargePlain';

module.exports = WindowSyncLargePlain;
module.exports.WindowSyncLargePlain = WindowSyncLargePlain;
module.exports.default = WindowSyncLargePlain;
