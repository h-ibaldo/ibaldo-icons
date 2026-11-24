'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const ShareNodes = forwardRef(function ShareNodes(
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
    createElement(Circle, {"cx":"4","cy":"11.999999999998181","r":"2","key":"0"}),
    createElement(Circle, {"cx":"20","cy":"3.999999999998181","r":"2","key":"1"}),
    createElement(Circle, {"cx":"20","cy":"19.999999999998181","r":"2","key":"2"}),
    createElement(Line, {"x1":"5.78173828125","y1":"12.890869140617724","x2":"18.21826171875","y2":"19.109130859367724","key":"3"}),
    createElement(Line, {"x1":"18.21826171875","y1":"4.890869140617724","x2":"5.78173828125","y2":"11.109130859367724","key":"4"})
  );
});

ShareNodes.displayName = 'ShareNodes';

module.exports = ShareNodes;
module.exports.ShareNodes = ShareNodes;
module.exports.default = ShareNodes;
