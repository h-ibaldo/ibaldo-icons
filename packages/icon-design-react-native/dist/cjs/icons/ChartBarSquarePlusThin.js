'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const ChartBarSquarePlusThin = forwardRef(function ChartBarSquarePlusThin(
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
    createElement(Path, {"d":"M21.974731440099276,11.000000003885361v6c0,2.761423749150708-2.238576250838378,5-5,5H6.974731440099276c-2.761423749148889,0-5-2.238576250849292-5-5V7.000000003885361c0-2.761423749150708,2.238576250851111-5,5-5h6","key":"0"}),
    createElement(Line, {"x1":"7.974731440099276","y1":"16.000000003885361","x2":"7.974731440099276","y2":"12.000000003885361","key":"1"}),
    createElement(Line, {"x1":"11.974731440099276","y1":"16.000000003885361","x2":"11.974731440099276","y2":"8.000000003885361","key":"2"}),
    createElement(Line, {"x1":"15.974731440099276","y1":"16.000000003885361","x2":"15.974731440099276","y2":"11.000000003885361","key":"3"}),
    createElement(Line, {"x1":"19.474731440099276","y1":"7.000000003885361","x2":"19.474731440010146","y2":"2.000000003976311","key":"4"}),
    createElement(Line, {"x1":"16.974731440099276","y1":"4.500000003976311","x2":"21.974731440010146","y2":"4.500000003885361","key":"5"})
  );
});

ChartBarSquarePlusThin.displayName = 'ChartBarSquarePlusThin';

module.exports = ChartBarSquarePlusThin;
module.exports.ChartBarSquarePlusThin = ChartBarSquarePlusThin;
module.exports.default = ChartBarSquarePlusThin;
