'use strict';

const { createElement, forwardRef } = require('react');

const PhoneTransferDiagonal = forwardRef(function PhoneTransferDiagonal(
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
    createElement('path', {"d":"M15.988 2L10.988 7","key":"0"}),
    createElement('path', {"d":"M16.887 13L21.887 8","key":"1"}),
    createElement('path', {"d":"M10.988 3L10.988 7L14.988 7","key":"2"}),
    createElement('path', {"d":"M21.887 11.895L21.887 8L17.988 8","key":"3"}),
    createElement('path', {"d":"M5.695 12.273L5.727 12.359C6.703 15.16 8.918 17.352 11.727 18.305","key":"4"}),
    createElement('path', {"d":"M11.797 16.043L13.23 15.289L17 17.551L16.449 20.309C16.32 20.945 15.906 21.488 15.328 21.777C14.945 21.969 14.512 22.039 14.09 21.98L12.859 21.805C10.637 21.484 8.539 20.578 6.785 19.176C6.063 18.598 5.402 17.938 4.824 17.215C3.422 15.461 2.516 13.363 2.195 11.141L2.02 9.91C1.961 9.488 2.031 9.055 2.223 8.672C2.512 8.094 3.055 7.68 3.691 7.551L6.449 7L8.711 10.77L8.027 11.523","key":"5"})
  );
});

PhoneTransferDiagonal.displayName = 'PhoneTransferDiagonal';

module.exports = PhoneTransferDiagonal;
module.exports.PhoneTransferDiagonal = PhoneTransferDiagonal;
module.exports.default = PhoneTransferDiagonal;
