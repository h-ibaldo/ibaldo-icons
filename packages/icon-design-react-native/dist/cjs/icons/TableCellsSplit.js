'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TableCellsSplit = forwardRef(function TableCellsSplit(
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
    createElement(Path, {"d":"M21 15L3 15","key":"0"}),
    createElement(Path, {"d":"M21 9L3 9","key":"1"}),
    createElement(Path, {"d":"M12 15L12 9","key":"2"}),
    createElement(Path, {"d":"M21 4.801L21 19.199C21 20.195 20.195 21 19.199 21L4.801 21C3.805 21 3 20.195 3 19.199L3 4.801C3 3.805 3.805 3 4.801 3L19.199 3C20.195 3 21 3.805 21 4.801Z","key":"3"})
  );
});

TableCellsSplit.displayName = 'TableCellsSplit';

module.exports = TableCellsSplit;
module.exports.TableCellsSplit = TableCellsSplit;
module.exports.default = TableCellsSplit;
