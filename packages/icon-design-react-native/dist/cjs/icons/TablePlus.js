'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TablePlus = forwardRef(function TablePlus(
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
    createElement(Path, {"d":"M12 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 12L12 12Z","key":"0"}),
    createElement(Path, {"d":"M12 12L12 2","key":"1"}),
    createElement(Path, {"d":"M19 22L19 16","key":"2"}),
    createElement(Path, {"d":"M16 19L22 19","key":"3"}),
    createElement(Path, {"d":"M2 12L12 12","key":"4"})
  );
});

TablePlus.displayName = 'TablePlus';

module.exports = TablePlus;
module.exports.TablePlus = TablePlus;
module.exports.default = TablePlus;
