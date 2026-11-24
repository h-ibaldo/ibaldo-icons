'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Rect } = RNSvg;

const ChartBarSquarePlus = forwardRef(function ChartBarSquarePlus(
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
    createElement(Path, {"d":"M21.974731440099276,11.000000004336471v6c0,2.761423749150708-2.238576250838378,5-5,5H6.974731440099276c-2.761423749148889,0-5-2.238576250849292-5-5V7.000000004336471c0-2.761423749150708,2.238576250851111-5,5-5h6","key":"0"}),
    createElement(Line, {"x1":"19.474731440099276","y1":"7.000000004336471","x2":"19.474731440010146","y2":"2.00000000442742","key":"1"}),
    createElement(Line, {"x1":"16.974731440099276","y1":"4.50000000442742","x2":"21.974731440010146","y2":"4.500000004336471","key":"2"}),
    createElement(Rect, {"x":"5.974731440099276","y":"10.000000003885361","width":"4","height":"6","key":"3"}),
    createElement(Rect, {"x":"9.974731440099276","y":"7.000000003885361","width":"4","height":"9","key":"4"}),
    createElement(Rect, {"x":"13.974731440099276","y":"11.000000003885361","width":"4","height":"5","key":"5"})
  );
});

ChartBarSquarePlus.displayName = 'ChartBarSquarePlus';

module.exports = ChartBarSquarePlus;
module.exports.ChartBarSquarePlus = ChartBarSquarePlus;
module.exports.default = ChartBarSquarePlus;
