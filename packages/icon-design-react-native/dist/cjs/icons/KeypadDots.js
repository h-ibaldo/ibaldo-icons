'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle } = RNSvg;

const KeypadDots = forwardRef(function KeypadDots(
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
    createElement(Circle, {"cx":"11.974731449503452","cy":"3.000000000479304","r":"1","key":"0"}),
    createElement(Circle, {"cx":"5.974731449503452","cy":"3.000000000479304","r":"1","key":"1"}),
    createElement(Circle, {"cx":"17.974731449503452","cy":"3.000000000479304","r":"1","key":"2"}),
    createElement(Circle, {"cx":"11.974731449503452","cy":"9.000000000480213","r":"1","key":"3"}),
    createElement(Circle, {"cx":"5.974731449503452","cy":"9.000000000480213","r":"1","key":"4"}),
    createElement(Circle, {"cx":"17.974731449503452","cy":"9.000000000480213","r":"1","key":"5"}),
    createElement(Circle, {"cx":"11.974731449503452","cy":"15.000000000480213","r":"1","key":"6"}),
    createElement(Circle, {"cx":"5.974731449503452","cy":"15.000000000480213","r":"1","key":"7"}),
    createElement(Circle, {"cx":"17.974731449503452","cy":"15.000000000480213","r":"1","key":"8"}),
    createElement(Circle, {"cx":"11.974731449503452","cy":"21.000000000480213","r":"1","key":"9"})
  );
});

KeypadDots.displayName = 'KeypadDots';

module.exports = KeypadDots;
module.exports.KeypadDots = KeypadDots;
module.exports.default = KeypadDots;
