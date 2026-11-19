'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Polyline } = RNSvg;

const Info = forwardRef(function Info(
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
    createElement(Polyline, {"points":"8.025268553439673 10.99999656424734 12.025268553439673 10.99999656424734 12.025268553439673 20.999996564243702","key":"0"}),
    createElement(Line, {"x1":"8.025268553439673","y1":"20.999996564243702","x2":"16.025268553439673","y2":"20.999996564243702","key":"1"}),
    createElement(Circle, {"cx":"12.025268553439673","cy":"4.99999656424734","r":"2","key":"2"})
  );
});

Info.displayName = 'Info';

module.exports = Info;
module.exports.Info = Info;
module.exports.default = Info;
