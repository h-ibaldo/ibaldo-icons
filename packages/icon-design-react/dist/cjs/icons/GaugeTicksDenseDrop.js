'use strict';

const { createElement, forwardRef } = require('react');

const GaugeTicksDenseDrop = forwardRef(function GaugeTicksDenseDrop(
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
    createElement('path', {"d":"M12 2L12 5","key":"1"}),
    createElement('path', {"d":"M12 19L12 22","key":"2"}),
    createElement('path', {"d":"M22 12L19 12","key":"3"}),
    createElement('path', {"d":"M5 12L2 12","key":"4"}),
    createElement('path', {"d":"M19 5L17 7","key":"5"}),
    createElement('path', {"d":"M7 17L5 19","key":"6"}),
    createElement('path', {"d":"M19 19L17 17","key":"7"}),
    createElement('path', {"d":"M7 7L5 5","key":"8"}),
    createElement('path', {"d":"M12 8L10.281 13.16C10.105 13.688 10.184 14.273 10.492 14.738C11.211 15.813 12.789 15.813 13.508 14.738C13.816 14.273 13.895 13.688 13.719 13.16Z","key":"9"})
  );
});

GaugeTicksDenseDrop.displayName = 'GaugeTicksDenseDrop';

module.exports = GaugeTicksDenseDrop;
module.exports.GaugeTicksDenseDrop = GaugeTicksDenseDrop;
module.exports.default = GaugeTicksDenseDrop;
