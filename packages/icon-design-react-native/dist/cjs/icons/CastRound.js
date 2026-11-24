'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CastRound = forwardRef(function CastRound(
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
    createElement(Path, {"d":"M15,19.999999999998181h4c1.656854249489697,0,3-1.343145750506665,3-3V6.999999999998181c0-1.656854249493335-1.343145750510303-3-3-3H5c-1.656854249489697,0-3,1.343145750506665-3,3","key":"0"}),
    createElement(Path, {"d":"M3,19.999999999998181c0-.552284749799583-.447715250200417-1-1-1","key":"1"}),
    createElement(Path, {"d":"M7,19.999999999998181c0-2.761423749001551-2.238576251000268-5-5-5","key":"2"}),
    createElement(Path, {"d":"M11,19.999999999998181c0-4.970562748199882-4.029437251800118-9-9-9","key":"3"})
  );
});

CastRound.displayName = 'CastRound';

module.exports = CastRound;
module.exports.CastRound = CastRound;
module.exports.default = CastRound;
