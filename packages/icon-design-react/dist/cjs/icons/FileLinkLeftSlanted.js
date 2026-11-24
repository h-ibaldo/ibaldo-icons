'use strict';

const { createElement, forwardRef } = require('react');

const FileLinkLeftSlanted = forwardRef(function FileLinkLeftSlanted(
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
    createElement('path', {"d":"M5 7L5 3C5 2.445 5.445 2 6 2L14.172 2C14.703 2 15.211 2.211 15.586 2.586L20.414 7.414C20.789 7.789 21 8.297 21 8.828L21 20C21 20.555 20.555 21 20 21L18 21","key":"0"}),
    createElement('path', {"d":"M14 2L14 8C14 8.555 14.445 9 15 9L21 9","key":"1"}),
    createElement('path', {"d":"M5 17L3.828 15.828C2.723 14.723 2.723 12.934 3.828 11.828C4.934 10.723 6.723 10.723 7.828 11.828L9 13","key":"2"}),
    createElement('path', {"d":"M12 16L13.172 17.172C14.277 18.277 14.277 20.066 13.172 21.172C12.066 22.277 10.277 22.277 9.172 21.172L8 20","key":"3"}),
    createElement('path', {"d":"M7 15L10 18","key":"4"})
  );
});

FileLinkLeftSlanted.displayName = 'FileLinkLeftSlanted';

module.exports = FileLinkLeftSlanted;
module.exports.FileLinkLeftSlanted = FileLinkLeftSlanted;
module.exports.default = FileLinkLeftSlanted;
