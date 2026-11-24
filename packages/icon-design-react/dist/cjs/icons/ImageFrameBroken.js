'use strict';

const { createElement, forwardRef } = require('react');

const ImageFrameBroken = forwardRef(function ImageFrameBroken(
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
    createElement('polygon', {"points":"16.999999993269739 14.998779299945454 14.11535643858042 19.037231448382954 8.999999993269739 10.998779299945454 1.999999993269739 21.998779299945454 11.999999993269739 21.998779299945454 15.999999993269739 21.998779299945454 21.999999993269739 21.998779299945454 16.999999993269739 14.998779299945454","key":"0"}),
    createElement('circle', {"cx":"15.499999993269739","cy":"8.498779299956368","r":"2.5","key":"1"}),
    createElement('polyline', {"points":"1.999999993269739 14.998779299956368 1.999999993269739 1.998779299956368 21.999999993269739 1.998779299956368 21.999999993269739 14.998779299956368","key":"2"})
  );
});

ImageFrameBroken.displayName = 'ImageFrameBroken';

module.exports = ImageFrameBroken;
module.exports.ImageFrameBroken = ImageFrameBroken;
module.exports.default = ImageFrameBroken;
