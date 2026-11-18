'use strict';

const { createElement, forwardRef } = require('react');

const ClosedCaptionCircleSmall = forwardRef(function ClosedCaptionCircleSmall(
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
    createElement('path', {"d":"M20 12C20 16.418 16.418 20 12 20C7.582 20 4 16.418 4 12C4 7.582 7.582 4 12 4C16.418 4 20 7.582 20 12Z","key":"0"}),
    createElement('path', {"d":"M10 14C8.895 14 8 13.105 8 12C8 10.895 8.895 10 10 10","key":"1"}),
    createElement('path', {"d":"M15 14C13.895 14 13 13.105 13 12C13 10.895 13.895 10 15 10","key":"2"})
  );
});

ClosedCaptionCircleSmall.displayName = 'ClosedCaptionCircleSmall';

module.exports = ClosedCaptionCircleSmall;
module.exports.ClosedCaptionCircleSmall = ClosedCaptionCircleSmall;
module.exports.default = ClosedCaptionCircleSmall;
