'use strict';

const { createElement, forwardRef } = require('react');

const WindowControlFullscreenCircle = forwardRef(function WindowControlFullscreenCircle(
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
    createElement('circle', {"cx":"12.000000002980414","cy":"11.998779299186936","r":"10","key":"0"}),
    createElement('polyline', {"points":"8.000000002980414 11.998779299186936 8.000000002980414 7.998779299186936 12.000000002980414 7.998779299186936","key":"1"}),
    createElement('polyline', {"points":"16.000000002980414 11.998779299186936 16.000000002980414 15.998779299186936 12.000000002980414 15.998779299186936","key":"2"})
  );
});

WindowControlFullscreenCircle.displayName = 'WindowControlFullscreenCircle';

module.exports = WindowControlFullscreenCircle;
module.exports.WindowControlFullscreenCircle = WindowControlFullscreenCircle;
module.exports.default = WindowControlFullscreenCircle;
