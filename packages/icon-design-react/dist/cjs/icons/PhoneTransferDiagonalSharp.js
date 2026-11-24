'use strict';

const { createElement, forwardRef } = require('react');

const PhoneTransferDiagonalSharp = forwardRef(function PhoneTransferDiagonalSharp(
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
    createElement('path', {"d":"M7.031 18.949L4.938 16.855C3.719 15.637 2.801 14.152 2.258 12.52C1.73 10.941 1.922 9.215 2.777 7.789L3.332 6.867C3.691 6.266 4.344 5.895 5.047 5.895L5.328 5.895C5.996 5.895 6.621 6.23 6.992 6.785L8.453 8.98C9.121 9.98 8.758 11.34 7.684 11.875L6.398 12.52L6.563 12.852C7.531 14.785 9.098 16.355 11.035 17.324L11.367 17.488L12.008 16.203C12.547 15.125 13.906 14.766 14.906 15.434L17.098 16.895C17.656 17.266 17.988 17.891 17.988 18.559L17.988 18.84C17.988 19.543 17.621 20.195 17.02 20.555L16.094 21.109C14.668 21.965 12.941 22.152 11.367 21.629C9.73 21.082 8.246 20.168 7.031 18.949Z","key":"0"}),
    createElement('path', {"d":"M15.988 2L10.988 7","key":"1"}),
    createElement('path', {"d":"M16.988 13L21.988 8","key":"2"}),
    createElement('path', {"d":"M10.988 3L10.988 7L14.988 7","key":"3"}),
    createElement('path', {"d":"M21.988 11.895L21.988 8L18.094 8","key":"4"})
  );
});

PhoneTransferDiagonalSharp.displayName = 'PhoneTransferDiagonalSharp';

module.exports = PhoneTransferDiagonalSharp;
module.exports.PhoneTransferDiagonalSharp = PhoneTransferDiagonalSharp;
module.exports.default = PhoneTransferDiagonalSharp;
