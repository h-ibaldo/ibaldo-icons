'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Path, Rect } = RNSvg;

const ChartBarSquareDot = forwardRef(function ChartBarSquareDot(
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
    createElement(Path, {"d":"M21.974731440099276,10.000000004336471v7c0,2.761423749150708-2.238576250838378,5-5,5H6.974731440099276c-2.761423749148889,0-5-2.238576250849292-5-5V7.000000004336471c0-2.761423749150708,2.238576250851111-5,5-5h7","key":"0"}),
    createElement(Circle, {"cx":"19.474731440099276","cy":"4.500000004336471","r":"2.5","key":"1"}),
    createElement(Rect, {"x":"5.974731440099276","y":"10.000000003885361","width":"4","height":"6","key":"2"}),
    createElement(Rect, {"x":"9.974731440099276","y":"7.000000003885361","width":"4","height":"9","key":"3"}),
    createElement(Rect, {"x":"13.974731440099276","y":"11.000000003885361","width":"4","height":"5","key":"4"})
  );
});

ChartBarSquareDot.displayName = 'ChartBarSquareDot';

module.exports = ChartBarSquareDot;
module.exports.ChartBarSquareDot = ChartBarSquareDot;
module.exports.default = ChartBarSquareDot;
