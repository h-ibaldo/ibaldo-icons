'use strict';

const { createElement, forwardRef } = require('react');

const UserMenu = forwardRef(function UserMenu(
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
    createElement('line', {"x1":"22.000000004900357","y1":"6.999999995256076","x2":"17.000000004900357","y2":"6.999999995256076","key":"0"}),
    createElement('line', {"x1":"22.000000004900357","y1":"11.999999995256076","x2":"17.000000004900357","y2":"11.999999995256076","key":"1"}),
    createElement('line', {"x1":"22.000000004900357","y1":"16.999999995256076","x2":"17.000000004900357","y2":"16.999999995256076","key":"2"}),
    createElement('circle', {"cx":"7.500000004900357","cy":"8.499999995256076","r":"3.5","key":"3"}),
    createElement('path', {"d":"M13.000000004900357,18.999999995256076v-2c0-2.761423749154346-2.238576250849292-5-5-5h-1c-2.761423749159803,0-5,2.238576250845654-5,5v2","key":"4"})
  );
});

UserMenu.displayName = 'UserMenu';

module.exports = UserMenu;
module.exports.UserMenu = UserMenu;
module.exports.default = UserMenu;
