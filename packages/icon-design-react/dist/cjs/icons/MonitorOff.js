'use strict';

const { createElement, forwardRef } = require('react');

const MonitorOff = forwardRef(function MonitorOff(
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
    createElement('path', {"d":"M21 3.75L21 17L3.332 17","key":"0"}),
    createElement('path', {"d":"M3 13L3 4L15 4","key":"1"}),
    createElement('path', {"d":"M12 21L12 17","key":"2"}),
    createElement('path', {"d":"M18 21L6 21","key":"3"}),
    createElement('path', {"d":"M2 18L22 3","key":"4"})
  );
});

MonitorOff.displayName = 'MonitorOff';

module.exports = MonitorOff;
module.exports.MonitorOff = MonitorOff;
module.exports.default = MonitorOff;
