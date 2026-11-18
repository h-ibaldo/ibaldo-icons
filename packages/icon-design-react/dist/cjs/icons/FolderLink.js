'use strict';

const { createElement, forwardRef } = require('react');

const FolderLink = forwardRef(function FolderLink(
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
    createElement('path', {"d":"M8 18L4 18C2.895 18 2 17.105 2 16L2 4C2 2.895 2.895 2 4 2L8.465 2C8.801 2 9.109 2.168 9.297 2.445L10.703 4.555C10.891 4.832 11.199 5 11.535 5L18 5C19.105 5 20 5.895 20 7L20 8","key":"0"}),
    createElement('path', {"d":"M20 18L21.172 16.828C22.277 15.723 22.277 13.934 21.172 12.828C20.066 11.723 18.277 11.723 17.172 12.828L16 14","key":"1"}),
    createElement('path', {"d":"M14 16L12.828 17.172C11.723 18.277 11.723 20.066 12.828 21.172C13.934 22.277 15.723 22.277 16.828 21.172L18 20","key":"2"}),
    createElement('path', {"d":"M18 16L16 18","key":"3"})
  );
});

FolderLink.displayName = 'FolderLink';

module.exports = FolderLink;
module.exports.FolderLink = FolderLink;
module.exports.default = FolderLink;
