'use strict';

const { createElement, forwardRef } = require('react');

const DocumentHeartLarge = forwardRef(function DocumentHeartLarge(
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
    createElement('path', {"d":"M16 7L6 7","key":"0"}),
    createElement('path', {"d":"M8 12L6 12","key":"1"}),
    createElement('path', {"d":"M7 17L6 17","key":"2"}),
    createElement('path', {"d":"M11 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L18 2C19.105 2 20 2.895 20 4L20 8","key":"3"}),
    createElement('path', {"d":"M17.172 13L16.172 14L15.172 13C14.066 11.895 12.277 11.895 11.172 13C10.066 14.105 10.066 15.895 11.172 17L16.172 22L21.172 17C22.277 15.895 22.277 14.105 21.172 13C20.066 11.895 18.277 11.895 17.172 13Z","key":"4"})
  );
});

DocumentHeartLarge.displayName = 'DocumentHeartLarge';

module.exports = DocumentHeartLarge;
module.exports.DocumentHeartLarge = DocumentHeartLarge;
module.exports.default = DocumentHeartLarge;
