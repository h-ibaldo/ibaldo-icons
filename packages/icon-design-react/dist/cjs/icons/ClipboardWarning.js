'use strict';

const { createElement, forwardRef } = require('react');

const ClipboardWarning = forwardRef(function ClipboardWarning(
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
    createElement('path', {"d":"M5 22C3.895 22 3 21.105 3 20L3 6C3 4.895 3.895 4 5 4L8 4","key":"0"}),
    createElement('path', {"d":"M16 4L19 4C20.105 4 21 4.895 21 6L21 10","key":"1"}),
    createElement('path', {"d":"M14.883 7L9.117 7C8.5 7 8 6.5 8 5.883L8 3.117C8 2.5 8.5 2 9.117 2L14.883 2C15.5 2 16 2.5 16 3.117L16 5.883C16 6.5 15.5 7 14.883 7Z","key":"2"}),
    createElement('path', {"d":"M15 15L15 16","key":"3"}),
    createElement('path', {"d":"M15 19L15 19","key":"4"}),
    createElement('path', {"d":"M10.445 22L19.555 22C21.09 22 22.051 20.34 21.289 19.008L17.133 11.734C16.191 10.082 13.809 10.082 12.867 11.734L8.711 19.008C7.949 20.34 8.91 22 10.445 22Z","key":"5"})
  );
});

ClipboardWarning.displayName = 'ClipboardWarning';

module.exports = ClipboardWarning;
module.exports.ClipboardWarning = ClipboardWarning;
module.exports.default = ClipboardWarning;
