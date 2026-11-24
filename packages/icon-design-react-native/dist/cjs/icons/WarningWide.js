'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const WarningWide = forwardRef(function WarningWide(
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
    createElement(Path, {"d":"M5.984525027923155,21.000000000479304h11.980412844241073c3.09720003215989,0,5.019342554740433-3.368455577625355,3.443706112851942-6.034917248503916l-5.99020642211326-10.137272406660486c-1.548247016329697-2.62011033532508-5.339165209388739-2.62011033532508-6.887412225718435,0L2.540818915074851,14.965082751975388c-1.575636441892129,2.666461670878562.346506080681138,6.034917248503916,3.443706112848304,6.034917248503916Z","key":"0"}),
    createElement(Line, {"x1":"11.974731450043691","y1":"17.010000000480431","x2":"11.974731450043691","y2":"17.000000000479304","key":"1"}),
    createElement(Line, {"x1":"11.974731450043691","y1":"10.000000000479304","x2":"11.974731450043691","y2":"13.000000000479304","key":"2"})
  );
});

WarningWide.displayName = 'WarningWide';

module.exports = WarningWide;
module.exports.WarningWide = WarningWide;
module.exports.default = WarningWide;
