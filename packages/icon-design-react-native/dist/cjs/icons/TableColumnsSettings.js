'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TableColumnsSettings = forwardRef(function TableColumnsSettings(
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
    createElement(Path, {"d":"M10 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L18 2C19.105 2 20 2.895 20 4L20 10","key":"0"}),
    createElement(Path, {"d":"M8 2L8 22","key":"1"}),
    createElement(Path, {"d":"M14 2L14 10","key":"2"}),
    createElement(Path, {"d":"M20.5 17C20.5 18.934 18.934 20.5 17 20.5C15.066 20.5 13.5 18.934 13.5 17C13.5 15.066 15.066 13.5 17 13.5C18.934 13.5 20.5 15.066 20.5 17Z","key":"3"}),
    createElement(Path, {"d":"M17 17.012L17 17","key":"4"}),
    createElement(Path, {"d":"M17 12L17 13.5","key":"5"}),
    createElement(Path, {"d":"M17 20.5L17 22","key":"6"}),
    createElement(Path, {"d":"M22 17L20.5 17","key":"7"}),
    createElement(Path, {"d":"M13.5 17L12 17","key":"8"}),
    createElement(Path, {"d":"M20.535 20.535L19.477 19.477","key":"9"}),
    createElement(Path, {"d":"M14.523 14.523L13.465 13.465","key":"10"}),
    createElement(Path, {"d":"M13.465 20.535L14.523 19.477","key":"11"}),
    createElement(Path, {"d":"M19.477 14.523L20.535 13.465","key":"12"})
  );
});

TableColumnsSettings.displayName = 'TableColumnsSettings';

module.exports = TableColumnsSettings;
module.exports.TableColumnsSettings = TableColumnsSettings;
module.exports.default = TableColumnsSettings;
