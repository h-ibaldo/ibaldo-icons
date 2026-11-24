'use strict';

const { createElement, forwardRef } = require('react');

const PaperclipPlusCurl = forwardRef(function PaperclipPlusCurl(
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
    createElement('path', {"d":"M12.242 19.758L11.242 20.758C9.586 22.414 6.898 22.414 5.242 20.758C3.586 19.102 3.586 16.414 5.242 14.758L14.758 5.242C16.414 3.586 19.102 3.586 20.758 5.242C22.414 6.898 22.414 9.586 20.758 11.242L16.5 15.5C15.672 16.328 14.328 16.328 13.5 15.5C12.672 14.672 12.672 13.328 13.5 12.5L17 9","key":"0"}),
    createElement('path', {"d":"M2 5L8 5","key":"1"}),
    createElement('path', {"d":"M5 2L5 8","key":"2"})
  );
});

PaperclipPlusCurl.displayName = 'PaperclipPlusCurl';

module.exports = PaperclipPlusCurl;
module.exports.PaperclipPlusCurl = PaperclipPlusCurl;
module.exports.default = PaperclipPlusCurl;
