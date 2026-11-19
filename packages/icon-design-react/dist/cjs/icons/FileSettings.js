'use strict';

const { createElement, forwardRef } = require('react');

const FileSettings = forwardRef(function FileSettings(
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
    createElement('path', {"d":"M19.5 17C19.5 18.933 17.933 20.5 16 20.5C14.067 20.5 12.5 18.933 12.5 17C12.5 15.067 14.067 13.5 16 13.5C17.933 13.5 19.5 15.067 19.5 17Z","key":"0"}),
    createElement('path', {"d":"M16 17L16 17","key":"1"}),
    createElement('path', {"d":"M16 12L16 13.5","key":"2"}),
    createElement('path', {"d":"M16 20.5L16 22","key":"3"}),
    createElement('path', {"d":"M21 17L19.5 17","key":"4"}),
    createElement('path', {"d":"M12.5 17L11 17","key":"5"}),
    createElement('path', {"d":"M19.536 20.536L18.475 19.475","key":"6"}),
    createElement('path', {"d":"M13.525 14.525L12.464 13.464","key":"7"}),
    createElement('path', {"d":"M12.464 20.536L13.525 19.475","key":"8"}),
    createElement('path', {"d":"M18.475 14.525L19.536 13.464","key":"9"}),
    createElement('path', {"d":"M19 9L19 4C19 2.895 18.105 2 17 2L8.984 2C8.354 2 7.75 2.25 7.304 2.696L3.696 6.304C3.25 6.75 3 7.354 3 7.984L3 20C3 21.105 3.895 22 5 22L9 22","key":"10"}),
    createElement('path', {"d":"M9 2L9 7C9 7.552 8.552 8 8 8L3 8","key":"11"})
  );
});

FileSettings.displayName = 'FileSettings';

module.exports = FileSettings;
module.exports.FileSettings = FileSettings;
module.exports.default = FileSettings;
