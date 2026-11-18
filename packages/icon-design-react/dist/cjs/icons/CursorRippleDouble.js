'use strict';

const { createElement, forwardRef } = require('react');

const CursorRippleDouble = forwardRef(function CursorRippleDouble(
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
    createElement('path', {"d":"M21.016 13.223L10.859 10.238C10.48 10.125 10.125 10.48 10.238 10.859L13.223 21.016C13.344 21.414 13.867 21.504 14.113 21.164L15.871 18.699L19.172 22L22 19.172L18.699 15.871L21.164 14.113C21.504 13.871 21.414 13.344 21.016 13.223Z","key":"0"}),
    createElement('path', {"d":"M12.805 7.152C12.082 6.441 11.094 6 10 6C7.789 6 6 7.793 6 10C6 11.094 6.441 12.082 7.152 12.805","key":"1"}),
    createElement('path', {"d":"M17.574 7.438C16.504 4.277 13.52 2 10 2C5.582 2 2 5.582 2 10C2 13.52 4.277 16.504 7.438 17.574","key":"2"})
  );
});

CursorRippleDouble.displayName = 'CursorRippleDouble';

module.exports = CursorRippleDouble;
module.exports.CursorRippleDouble = CursorRippleDouble;
module.exports.default = CursorRippleDouble;
