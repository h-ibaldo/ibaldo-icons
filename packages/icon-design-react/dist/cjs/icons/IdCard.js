'use strict';

const { createElement, forwardRef } = require('react');

const IdCard = forwardRef(function IdCard(
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
    createElement('path', {"d":"M3 5L21 5C21.551 5 22 5.449 22 6L22 18C22 18.551 21.551 19 21 19L3 19C2.449 19 2 18.551 2 18L2 6C2 5.449 2.449 5 3 5Z","key":"0"}),
    createElement('path', {"d":"M5 16C5 14.344 6.344 13 8 13L9 13C10.656 13 12 14.344 12 16","key":"1"}),
    createElement('path', {"d":"M6 10.5C6 9.121 7.121 8 8.5 8C9.879 8 11 9.121 11 10.5C11 11.879 9.879 13 8.5 13C7.121 13 6 11.879 6 10.5Z","key":"2"}),
    createElement('path', {"d":"M15 9L18 9","key":"3"}),
    createElement('path', {"d":"M15 12L18 12","key":"4"}),
    createElement('path', {"d":"M15 15L18 15","key":"5"})
  );
});

IdCard.displayName = 'IdCard';

module.exports = IdCard;
module.exports.IdCard = IdCard;
module.exports.default = IdCard;
