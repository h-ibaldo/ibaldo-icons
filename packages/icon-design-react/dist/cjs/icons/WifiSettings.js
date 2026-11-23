'use strict';

const { createElement, forwardRef } = require('react');

const WifiSettings = forwardRef(function WifiSettings(
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
    createElement('path', {"d":"M2.387 7.777C4.855 6.215 7.621 5.313 10.43 5.066","key":"0"}),
    createElement('path', {"d":"M5.59 11.852C7.035 10.938 8.633 10.363 10.27 10.125","key":"1"}),
    createElement('path', {"d":"M8.797 15.926C10.746 14.691 13.254 14.691 15.203 15.926","key":"2"}),
    createElement('path', {"d":"M20.5 7C20.5 8.934 18.934 10.5 17 10.5C15.066 10.5 13.5 8.934 13.5 7C13.5 5.066 15.066 3.5 17 3.5C18.934 3.5 20.5 5.066 20.5 7Z","key":"3"}),
    createElement('path', {"d":"M17 7.012L17 7","key":"4"}),
    createElement('path', {"d":"M17 2L17 3.5","key":"5"}),
    createElement('path', {"d":"M17 10.5L17 12","key":"6"}),
    createElement('path', {"d":"M22 7L20.5 7","key":"7"}),
    createElement('path', {"d":"M13.5 7L12 7","key":"8"}),
    createElement('path', {"d":"M20.535 10.535L19.477 9.477","key":"9"}),
    createElement('path', {"d":"M14.523 4.523L13.465 3.465","key":"10"}),
    createElement('path', {"d":"M13.465 10.535L14.523 9.477","key":"11"}),
    createElement('path', {"d":"M19.477 4.523L20.535 3.465","key":"12"}),
    createElement('path', {"d":"M12 20L12 20","key":"13"})
  );
});

WifiSettings.displayName = 'WifiSettings';

module.exports = WifiSettings;
module.exports.WifiSettings = WifiSettings;
module.exports.default = WifiSettings;
