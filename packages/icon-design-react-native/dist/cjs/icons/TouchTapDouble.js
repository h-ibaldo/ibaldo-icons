'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Path } = RNSvg;

const TouchTapDouble = forwardRef(function TouchTapDouble(
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
    createElement(Circle, {"cx":"11.974731413245536","cy":"15.998779298537556","r":"5","key":"0"}),
    createElement(Path, {"d":"M16.974731413245536,8.516418458693806c-1.430297851558862-.9576416015625-3.1494140625-1.51763916015625-5-1.51763916015625s-3.569702148439319.55999755859375-5,1.51763916015625","key":"1"}),
    createElement(Path, {"d":"M15.974731413245536,3.636840821975056c-1.261108398439319-.40875244140625-2.602661132808862-.6380615234375-4-.6380615234375-1.397338867189319,0-2.738891601558862.22930908203125-4,.6380615234375","key":"2"})
  );
});

TouchTapDouble.displayName = 'TouchTapDouble';

module.exports = TouchTapDouble;
module.exports.TouchTapDouble = TouchTapDouble;
module.exports.default = TouchTapDouble;
