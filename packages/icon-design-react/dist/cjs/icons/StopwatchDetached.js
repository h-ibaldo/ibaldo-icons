'use strict';

const { createElement, forwardRef } = require('react');

const StopwatchDetached = forwardRef(function StopwatchDetached(
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
    createElement('path', {"d":"M20 13C20 17.418 16.418 21 12 21C7.582 21 4 17.418 4 13C4 8.582 7.582 5 12 5C16.418 5 20 8.582 20 13Z","key":"0"}),
    createElement('path', {"d":"M10 2L14 2","key":"1"}),
    createElement('path', {"d":"M19 5L21 7","key":"2"}),
    createElement('path', {"d":"M12 9L12 13","key":"3"})
  );
});

StopwatchDetached.displayName = 'StopwatchDetached';

module.exports = StopwatchDetached;
module.exports.StopwatchDetached = StopwatchDetached;
module.exports.default = StopwatchDetached;
