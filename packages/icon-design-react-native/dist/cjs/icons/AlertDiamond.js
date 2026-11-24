'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const AlertDiamond = forwardRef(function AlertDiamond(
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
    createElement(Rect, {"x":"4.221825375546466","y":"4.219387443179009","width":"15.556349186088269","height":"15.556349186088269","rx":"2.49999999999882","ry":"2.49999999999882","transform":"translate(-4.968838856957838 11.999285914730187) rotate(-44.999999999993044)","key":"0"}),
    createElement(Line, {"x1":"11.999999968586053","y1":"16.023095941721294","x2":"11.999999968586053","y2":"16.033095941721513","key":"1"}),
    createElement(Line, {"x1":"11.999999968586053","y1":"8.033095941721513","x2":"11.999999968586053","y2":"12.033095941721513","key":"2"})
  );
});

AlertDiamond.displayName = 'AlertDiamond';

module.exports = AlertDiamond;
module.exports.AlertDiamond = AlertDiamond;
module.exports.default = AlertDiamond;
