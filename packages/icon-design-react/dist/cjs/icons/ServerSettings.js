'use strict';

const { createElement, forwardRef } = require('react');

const ServerSettings = forwardRef(function ServerSettings(
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
    createElement('path', {"d":"M15.5 12C15.5 13.934 13.934 15.5 12 15.5C10.066 15.5 8.5 13.934 8.5 12C8.5 10.066 10.066 8.5 12 8.5C13.934 8.5 15.5 10.066 15.5 12Z","key":"0"}),
    createElement('path', {"d":"M12 12.012L12 12","key":"1"}),
    createElement('path', {"d":"M12 7L12 8.5","key":"2"}),
    createElement('path', {"d":"M12 15.5L12 17","key":"3"}),
    createElement('path', {"d":"M17 12L15.5 12","key":"4"}),
    createElement('path', {"d":"M8.5 12L7 12","key":"5"}),
    createElement('path', {"d":"M15.535 15.535L14.477 14.477","key":"6"}),
    createElement('path', {"d":"M9.523 9.523L8.465 8.465","key":"7"}),
    createElement('path', {"d":"M8.465 15.535L9.523 14.477","key":"8"}),
    createElement('path', {"d":"M14.477 9.523L15.535 8.465","key":"9"}),
    createElement('path', {"d":"M7 5L6 5","key":"10"}),
    createElement('path', {"d":"M18.902 16L21 16C21.551 16 22 16.449 22 17L22 21C22 21.551 21.551 22 21 22L3 22C2.449 22 2 21.551 2 21L2 17C2 16.449 2.449 16 3 16L5 16","key":"11"}),
    createElement('path', {"d":"M5.098 8L3 8C2.449 8 2 7.551 2 7L2 3C2 2.449 2.449 2 3 2L21 2C21.551 2 22 2.449 22 3L22 7C22 7.551 21.551 8 21 8L19 8","key":"12"}),
    createElement('path', {"d":"M7 19L6 19","key":"13"})
  );
});

ServerSettings.displayName = 'ServerSettings';

module.exports = ServerSettings;
module.exports.ServerSettings = ServerSettings;
module.exports.default = ServerSettings;
