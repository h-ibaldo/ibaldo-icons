'use strict';

const { createElement, forwardRef } = require('react');

const MoonSparkle = forwardRef(function MoonSparkle(
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
    createElement('path', {"d":"M19.88 14.464A9 9 0 1 1 9.536 4.12","key":"0"}),
    createElement('path', {"d":"M19.88 14.464A8 8 0 0 1 9.536 4.12","key":"1"}),
    createElement('path', {"d":"M16.5 5Q17.04 7.46 19.5 8Q17.04 8.54 16.5 11Q15.96 8.54 13.5 8Q15.96 7.46 16.5 5Z","key":"2"}),
    createElement('path', {"d":"M20.5 2Q20.77 3.23 22 3.5Q20.77 3.77 20.5 5Q20.23 3.77 19 3.5Q20.23 3.23 20.5 2Z","key":"3"})
  );
});

MoonSparkle.displayName = 'MoonSparkle';

module.exports = MoonSparkle;
module.exports.MoonSparkle = MoonSparkle;
module.exports.default = MoonSparkle;
