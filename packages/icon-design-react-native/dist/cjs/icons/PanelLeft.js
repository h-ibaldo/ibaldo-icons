'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Polyline, Rect } = RNSvg;

const PanelLeft = forwardRef(function PanelLeft(
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
    createElement(Rect, {"x":"2.050537047695798","y":"1.997697219531346","width":"20","height":"19.999864816291392","rx":"2.00000000000091","ry":"2.00000000000091","transform":"translate(24.101074094785993 23.99525925596236) rotate(-180)","key":"0"}),
    createElement(Polyline, {"points":"2.050623966566491 5.997562035775445 7.050623966566491 5.997562035775445 7.050623966566491 17.997426743134383 2.050623966566491 17.997426743134383","key":"1"})
  );
});

PanelLeft.displayName = 'PanelLeft';

module.exports = PanelLeft;
module.exports.PanelLeft = PanelLeft;
module.exports.default = PanelLeft;
