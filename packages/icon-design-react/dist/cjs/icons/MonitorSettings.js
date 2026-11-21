'use strict';

const { createElement, forwardRef } = require('react');

const MonitorSettings = forwardRef(function MonitorSettings(
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
    createElement('path', {"d":"M22 14L22 18L2 18L2 4L9 4","key":"0"}),
    createElement('path', {"d":"M12 21L12 18","key":"1"}),
    createElement('path', {"d":"M18 21L6 21","key":"2"}),
    createElement('path', {"d":"M19.852 7.387C19.852 9.32 18.285 10.887 16.352 10.887C14.418 10.887 12.852 9.32 12.852 7.387C12.852 5.453 14.418 3.887 16.352 3.887C18.285 3.887 19.852 5.453 19.852 7.387Z","key":"3"}),
    createElement('path', {"d":"M16.352 7.398L16.352 7.387","key":"4"}),
    createElement('path', {"d":"M16.352 2.387L16.352 3.887","key":"5"}),
    createElement('path', {"d":"M16.352 10.887L16.352 12.387","key":"6"}),
    createElement('path', {"d":"M21.352 7.387L19.852 7.387","key":"7"}),
    createElement('path', {"d":"M12.852 7.387L11.352 7.387","key":"8"}),
    createElement('path', {"d":"M19.887 10.922L18.824 9.863","key":"9"}),
    createElement('path', {"d":"M13.875 4.914L12.816 3.852","key":"10"}),
    createElement('path', {"d":"M12.816 10.922L13.875 9.863","key":"11"}),
    createElement('path', {"d":"M18.824 4.914L19.887 3.852","key":"12"})
  );
});

MonitorSettings.displayName = 'MonitorSettings';

module.exports = MonitorSettings;
module.exports.MonitorSettings = MonitorSettings;
module.exports.default = MonitorSettings;
