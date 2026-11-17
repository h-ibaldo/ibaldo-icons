'use strict';

const { createElement, forwardRef } = require('react');

const StopwatchSnooze = forwardRef(function StopwatchSnooze(
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
    createElement('path', {"d":"M20 14C20 18.418 16.418 22 12 22C7.582 22 4 18.418 4 14C4 9.582 7.582 6 12 6C16.418 6 20 9.582 20 14Z","key":"0"}),
    createElement('path', {"d":"M5 5L3 7","key":"1"}),
    createElement('path', {"d":"M19 5L21 7","key":"2"}),
    createElement('path', {"d":"M10 3L14 3","key":"3"}),
    createElement('path', {"d":"M12 3L12 6","key":"4"}),
    createElement('path', {"d":"M10 11L14 11L10 17L14 17","key":"5"})
  );
});

StopwatchSnooze.displayName = 'StopwatchSnooze';

module.exports = StopwatchSnooze;
module.exports.StopwatchSnooze = StopwatchSnooze;
module.exports.default = StopwatchSnooze;
