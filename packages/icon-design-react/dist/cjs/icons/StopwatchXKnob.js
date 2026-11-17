'use strict';

const { createElement, forwardRef } = require('react');

const StopwatchXKnob = forwardRef(function StopwatchXKnob(
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
    createElement('path', {"d":"M20 5L22 7","key":"2"}),
    createElement('path', {"d":"M21 6L18.566 8.438","key":"3"}),
    createElement('path', {"d":"M10 15L14 11","key":"4"}),
    createElement('path', {"d":"M14 15L10 11","key":"5"})
  );
});

StopwatchXKnob.displayName = 'StopwatchXKnob';

module.exports = StopwatchXKnob;
module.exports.StopwatchXKnob = StopwatchXKnob;
module.exports.default = StopwatchXKnob;
