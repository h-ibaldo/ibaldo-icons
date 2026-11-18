'use strict';

const { createElement, forwardRef } = require('react');

const StopwatchPieBare = forwardRef(function StopwatchPieBare(
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
    createElement('path', {"d":"M12 2L12 5","key":"1"}),
    createElement('path', {"d":"M10 2L14 2","key":"2"}),
    createElement('path', {"d":"M11.5 8.5C14.262 8.5 16.5 10.738 16.5 13.5","key":"3"}),
    createElement('path', {"d":"M11.5 8.5L11.5 13.5L16.5 13.5","key":"4"})
  );
});

StopwatchPieBare.displayName = 'StopwatchPieBare';

module.exports = StopwatchPieBare;
module.exports.StopwatchPieBare = StopwatchPieBare;
module.exports.default = StopwatchPieBare;
