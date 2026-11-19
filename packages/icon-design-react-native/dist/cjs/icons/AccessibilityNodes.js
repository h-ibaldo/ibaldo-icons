'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, G, Line, Polyline } = RNSvg;

const AccessibilityNodes = forwardRef(function AccessibilityNodes(
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
    createElement(Circle, {"cx":"12.025268549329667","cy":"3.997565476096497","r":"2","key":"0"}),
    createElement(Line, {"x1":"9.025268549329667","y1":"13.997565476048294","x2":"15.025268548970416","y2":"13.997565476048294","key":"1"}),
    createElement(Line, {"x1":"15.025268548970416","y1":"8.997565476096497","x2":"9.025268549329667","y2":"8.997565476096497","key":"2"}),
    createElement(G, {"key":"3"},
      createElement(Circle, {"cx":"4.025268548970416","cy":"6.997565476096497","r":"2","key":"0"}),
      createElement(Circle, {"cx":"6.025268548970416","cy":"19.997565476096497","r":"2","key":"1"}),
      createElement(Polyline, {"points":"6.916137689599964 18.215766159689338 9.025268548970416 13.997565476096497 9.025268548970416 8.997565476096497 5.879516595849964 7.739264694846497","key":"2"})),
    createElement(G, {"key":"4"},
      createElement(Circle, {"cx":"20.025268548969962","cy":"6.997565476030104","r":"2.000000000000227","key":"0"}),
      createElement(Circle, {"cx":"18.025268549552266","cy":"19.997565476120144","r":"1.999999999999204","key":"1"}),
      createElement(Polyline, {"points":"17.134399408850186 18.215766159754821 15.025268549279645 13.997565476255659 15.025268549059547 8.997565476255659 18.171020502129977 7.739264694863778","key":"2"}))
  );
});

AccessibilityNodes.displayName = 'AccessibilityNodes';

module.exports = AccessibilityNodes;
module.exports.AccessibilityNodes = AccessibilityNodes;
module.exports.default = AccessibilityNodes;
