'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Path } = RNSvg;

const UserMenu = forwardRef(function UserMenu(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Line, {"x1":"22.000000004900357","y1":"6.999999995256076","x2":"17.000000004900357","y2":"6.999999995256076","key":"0"}),
    createElement(Line, {"x1":"22.000000004900357","y1":"11.999999995256076","x2":"17.000000004900357","y2":"11.999999995256076","key":"1"}),
    createElement(Line, {"x1":"22.000000004900357","y1":"16.999999995256076","x2":"17.000000004900357","y2":"16.999999995256076","key":"2"}),
    createElement(Circle, {"cx":"7.500000004900357","cy":"8.499999995256076","r":"3.5","key":"3"}),
    createElement(Path, {"d":"M13.000000004900357,18.999999995256076v-2c0-2.761423749154346-2.238576250849292-5-5-5h-1c-2.761423749159803,0-5,2.238576250845654-5,5v2","key":"4"})
  );
});

UserMenu.displayName = 'UserMenu';

module.exports = UserMenu;
module.exports.UserMenu = UserMenu;
module.exports.default = UserMenu;
