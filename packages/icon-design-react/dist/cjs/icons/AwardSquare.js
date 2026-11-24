'use strict';

const { createElement, forwardRef } = require('react');

const AwardSquare = forwardRef(function AwardSquare(
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
    createElement('path', {"d":"M12 7.297L14.484 6L15.324 8.676L18 9.516L16.703 12L18 14.484L15.324 15.324L14.484 18L12 16.703L9.516 18L8.676 15.324L6 14.484L7.297 12L6 9.516L8.676 8.676L9.516 6Z","key":"0"}),
    createElement('path', {"d":"M13.473 17.473L18 22L19 19L22 18L17.473 13.473","key":"1"}),
    createElement('path', {"d":"M6.527 13.473L2 18L5 19L6 22L10.527 17.473","key":"2"}),
    createElement('path', {"d":"M2 14L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 14","key":"3"})
  );
});

AwardSquare.displayName = 'AwardSquare';

module.exports = AwardSquare;
module.exports.AwardSquare = AwardSquare;
module.exports.default = AwardSquare;
