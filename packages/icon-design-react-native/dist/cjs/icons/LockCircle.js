'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Path, Rect } = RNSvg;

const LockCircle = forwardRef(function LockCircle(
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
    createElement(Circle, {"cx":"11.949462885141656","cy":"12.000000000480213","r":"10","key":"0"}),
    createElement(Rect, {"x":"7.949462885141656","y":"12.000000000480213","width":"8","height":"5","key":"1"}),
    createElement(Path, {"d":"M13.949462876412326,12.000000000480213v-3.000001994521881c0-1.104568398117408-.895429607360711-1.999998005478119-1.999998005478119-1.999998005478119h-.000004000001354c-1.104568399970049,0-1.999998008110197.895429610263818-1.999998005479938,1.999998010240233l.000000007149538,3.000001989759767","key":"2"})
  );
});

LockCircle.displayName = 'LockCircle';

module.exports = LockCircle;
module.exports.LockCircle = LockCircle;
module.exports.default = LockCircle;
