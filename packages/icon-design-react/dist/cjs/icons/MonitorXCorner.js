'use strict';

const { createElement, forwardRef } = require('react');

const MonitorXCorner = forwardRef(function MonitorXCorner(
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
    createElement('path', {"d":"M22 13L22 18L2 18L2 4L13 4","key":"0"}),
    createElement('path', {"d":"M12 21L12 18","key":"1"}),
    createElement('path', {"d":"M18 21L6 21","key":"2"}),
    createElement('path', {"d":"M17 9L22 4","key":"3"}),
    createElement('path', {"d":"M17 4L22 9","key":"4"})
  );
});

MonitorXCorner.displayName = 'MonitorXCorner';

module.exports = MonitorXCorner;
module.exports.MonitorXCorner = MonitorXCorner;
module.exports.default = MonitorXCorner;
