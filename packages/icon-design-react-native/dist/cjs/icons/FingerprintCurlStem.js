'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const FingerprintCurlStem = forwardRef(function FingerprintCurlStem(
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
    createElement(Path, {"d":"M18,16.999999999996362c-3.313708498799315,0-6-2.686291501197957-6-6","key":"0"}),
    createElement(Path, {"d":"M4,11c0-4.418277998400299,3.581722001599701-8,8-8s8,3.581722001599701,8,8","key":"1"}),
    createElement(Path, {"d":"M18,21c-5.522847497999464,0-10-4.477152502000536-10-10","key":"2"}),
    createElement(Path, {"d":"M16,10.999999999996362c0,1.104569499602803.895430500400835,2,2,2s2-.895430500397197,2-2","key":"3"}),
    createElement(Path, {"d":"M16,10.999999999996362c0-2.20916748046875-1.790832519529431-4-4-4s-4,1.79083251953125-4,4","key":"4"}),
    createElement(Line, {"x1":"4","y1":"11","x2":"4","y2":"21","key":"5"}),
    createElement(Line, {"x1":"18","y1":"17","x2":"19","y2":"17","key":"6"}),
    createElement(Line, {"x1":"18","y1":"21","x2":"19","y2":"21","key":"7"}),
    createElement(Path, {"d":"M7,18v.000002000000677c0,1.225730922553339.692525544300224,2.346260772144888,1.788852593150295,2.894424296569923l.211147406849705.1055737034294","key":"8"})
  );
});

FingerprintCurlStem.displayName = 'FingerprintCurlStem';

module.exports = FingerprintCurlStem;
module.exports.FingerprintCurlStem = FingerprintCurlStem;
module.exports.default = FingerprintCurlStem;
