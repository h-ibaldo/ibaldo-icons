'use strict';

const { createElement, forwardRef } = require('react');

const StopwatchDottedBare = forwardRef(function StopwatchDottedBare(
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
    createElement('path', {"d":"M12 2L12 5","key":"0"}),
    createElement('path', {"d":"M10 2L14 2","key":"1"}),
    createElement('path', {"d":"M12 8.5L12 13","key":"2"}),
    createElement('path', {"d":"M12 5C16.418 5 20 8.582 20 13C20 17.418 16.418 21 12 21C7.582 21 4 17.418 4 13","key":"3"}),
    createElement('path', {"d":"M12 5C7.582 5 4 8.582 4 13","strokeDasharray":"0 3.2","key":"4"})
  );
});

StopwatchDottedBare.displayName = 'StopwatchDottedBare';

module.exports = StopwatchDottedBare;
module.exports.StopwatchDottedBare = StopwatchDottedBare;
module.exports.default = StopwatchDottedBare;
