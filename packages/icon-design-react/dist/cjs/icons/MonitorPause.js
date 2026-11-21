'use strict';

const { createElement, forwardRef } = require('react');

const MonitorPause = forwardRef(function MonitorPause(
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
    createElement('path', {"d":"M10 9L10 13","key":"0"}),
    createElement('path', {"d":"M14 9L14 13","key":"1"}),
    createElement('path', {"d":"M2 4L22 4L22 18L2 18Z","key":"2"}),
    createElement('path', {"d":"M12 21L12 18","key":"3"}),
    createElement('path', {"d":"M18 21L6 21","key":"4"})
  );
});

MonitorPause.displayName = 'MonitorPause';

module.exports = MonitorPause;
module.exports.MonitorPause = MonitorPause;
module.exports.default = MonitorPause;
