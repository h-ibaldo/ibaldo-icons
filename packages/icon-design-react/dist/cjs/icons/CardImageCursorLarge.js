'use strict';

const { createElement, forwardRef } = require('react');

const CardImageCursorLarge = forwardRef(function CardImageCursorLarge(
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
    createElement('path', {"d":"M22 11L22 4C22 2.895 21.105 2 20 2L4 2C2.895 2 2 2.895 2 4L2 20C2 21.105 2.895 22 4 22L11 22","key":"0"}),
    createElement('path', {"d":"M21 14.637L12.57 11.57C11.949 11.344 11.344 11.949 11.57 12.57L14.637 21C14.789 21.414 15.344 21.48 15.59 21.113L17 19L20 22L22 20L19 17L21.113 15.59C21.48 15.344 21.414 14.789 21 14.637Z","key":"1"}),
    createElement('path', {"d":"M8 14L7 14C6.449 14 6 13.551 6 13L6 7C6 6.449 6.449 6 7 6L17 6C17.551 6 18 6.449 18 7L18 10","key":"2"}),
    createElement('path', {"d":"M6 18L10 18","key":"3"})
  );
});

CardImageCursorLarge.displayName = 'CardImageCursorLarge';

module.exports = CardImageCursorLarge;
module.exports.CardImageCursorLarge = CardImageCursorLarge;
module.exports.default = CardImageCursorLarge;
