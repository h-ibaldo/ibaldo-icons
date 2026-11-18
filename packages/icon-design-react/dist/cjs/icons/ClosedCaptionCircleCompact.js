'use strict';

const { createElement, forwardRef } = require('react');

const ClosedCaptionCircleCompact = forwardRef(function ClosedCaptionCircleCompact(
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
    createElement('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"0"}),
    createElement('path', {"d":"M10 14L9 14C7.895 14 7 13.105 7 12C7 10.895 7.895 10 9 10L10 10","key":"1"}),
    createElement('path', {"d":"M16 14L15 14C13.895 14 13 13.105 13 12C13 10.895 13.895 10 15 10L16 10","key":"2"})
  );
});

ClosedCaptionCircleCompact.displayName = 'ClosedCaptionCircleCompact';

module.exports = ClosedCaptionCircleCompact;
module.exports.ClosedCaptionCircleCompact = ClosedCaptionCircleCompact;
module.exports.default = ClosedCaptionCircleCompact;
