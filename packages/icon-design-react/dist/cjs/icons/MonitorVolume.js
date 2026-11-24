'use strict';

const { createElement, forwardRef } = require('react');

const MonitorVolume = forwardRef(function MonitorVolume(
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
    createElement('path', {"d":"M2 4L22 4L22 18L2 18Z","key":"0"}),
    createElement('path', {"d":"M12 21L12 18","key":"1"}),
    createElement('path', {"d":"M18 21L6 21","key":"2"}),
    createElement('path', {"d":"M8 9L6 9L6 13L8 13L12 15L12 7Z","key":"3"}),
    createElement('path', {"d":"M15 9.586C15.781 10.367 15.781 11.633 15 12.414","key":"4"}),
    createElement('path', {"d":"M17.207 7.793C18.977 9.563 18.977 12.438 17.207 14.207","key":"5"})
  );
});

MonitorVolume.displayName = 'MonitorVolume';

module.exports = MonitorVolume;
module.exports.MonitorVolume = MonitorVolume;
module.exports.default = MonitorVolume;
