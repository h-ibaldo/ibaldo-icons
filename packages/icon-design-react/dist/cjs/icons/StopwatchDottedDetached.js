'use strict';

const { createElement, forwardRef } = require('react');

const StopwatchDottedDetached = forwardRef(function StopwatchDottedDetached(
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
    createElement('path', {"d":"M10 2L14 2","key":"0"}),
    createElement('path', {"d":"M19 5L21 7","key":"1"}),
    createElement('path', {"d":"M12 9.5L12 14","key":"2"}),
    createElement('path', {"d":"M12 6C16.418 6 20 9.582 20 14C20 18.418 16.418 22 12 22C7.582 22 4 18.418 4 14","key":"3"}),
    createElement('path', {"d":"M12 6C7.582 6 4 9.582 4 14","strokeDasharray":"0 3.2","key":"4"})
  );
});

StopwatchDottedDetached.displayName = 'StopwatchDottedDetached';

module.exports = StopwatchDottedDetached;
module.exports.StopwatchDottedDetached = StopwatchDottedDetached;
module.exports.default = StopwatchDottedDetached;
