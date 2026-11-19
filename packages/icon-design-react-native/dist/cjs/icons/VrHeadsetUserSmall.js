'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { G, Line, Path, Rect } = RNSvg;

const VrHeadsetUserSmall = forwardRef(function VrHeadsetUserSmall(
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
    createElement(Rect, {"x":"6.025268554169998","y":"6.000000003048626","width":"12","height":"5","rx":"2","ry":"2","key":"0"}),
    createElement(G, {"key":"1"},
      createElement(Path, {"d":"M16.025268554169998,6.000000003048626c0-2.20916748046875-1.790771484370453-4-4-4-2.209228515620453,0-4,1.79083251953125-4,4","key":"0"}),
      createElement(Path, {"d":"M8.025268554169998,11.000000003048626c0,2.2091064453125,1.790771484379547,4,4,4,2.209228515629547,0,4-1.7908935546875,4-4","key":"1"})),
    createElement(Line, {"x1":"12.025268554169998","y1":"2.000000003048626","x2":"12.025268554169998","y2":"6.000000003048626","key":"2"}),
    createElement(Path, {"d":"M6.025268554169998,16.260009768673626c-1.81201171875,1.26513671875-3,3.36236572265625-3,5.739990234375h18c0-2.37762451171875-1.18798828125-4.474853515625-3-5.739990234375","key":"3"})
  );
});

VrHeadsetUserSmall.displayName = 'VrHeadsetUserSmall';

module.exports = VrHeadsetUserSmall;
module.exports.VrHeadsetUserSmall = VrHeadsetUserSmall;
module.exports.default = VrHeadsetUserSmall;
