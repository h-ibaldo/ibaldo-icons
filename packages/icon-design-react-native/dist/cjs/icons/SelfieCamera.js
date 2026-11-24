'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Path, Polyline, Rect } = RNSvg;

const SelfieCamera = forwardRef(function SelfieCamera(
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
    createElement(Rect, {"x":"2.000538506254543","y":"4.999505875327031","width":"20","height":"14.000981371270427","rx":"2.160322612580842","ry":"2.160322612580842","transform":"translate(.000541944665807 24.000535066590324) rotate(-89.999999997008871)","key":"0"}),
    createElement(Polyline, {"points":"11.001029198860124 21.999996564258254 11.000538512920684 19.999996564167304 13.000538512920684 19.999996564258254 13.001029198860124 21.999996564258254","key":"1"}),
    createElement(Line, {"x1":"10.011029198860342","y1":"4.999996564258254","x2":"10.001029198860124","y2":"4.999996564258254","key":"2"}),
    createElement(Line, {"x1":"14.001029198860124","y1":"4.999996564258254","x2":"13.001029198860124","y2":"4.999996564258254","key":"3"}),
    createElement(Circle, {"cx":"12.001029198860124","cy":"10.499996564258254","r":"2.5","key":"4"}),
    createElement(Path, {"d":"M14.999999981180736,16.999996564258254l.001029217679388-1.000003000001016c0-1.656852592637733-1.343144407359432-2.999996999998984-2.999997000000803-2.999996999998984h-.000005999998393c-1.656852592630457,0-2.999997000000803,1.343144407361251-2.999997000000803,2.999996999998984l-.001029217679388,1.000003000001016","key":"5"})
  );
});

SelfieCamera.displayName = 'SelfieCamera';

module.exports = SelfieCamera;
module.exports.SelfieCamera = SelfieCamera;
module.exports.default = SelfieCamera;
