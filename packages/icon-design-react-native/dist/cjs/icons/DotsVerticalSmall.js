'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line } = RNSvg;

const DotsVerticalSmall = forwardRef(function DotsVerticalSmall(
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
    createElement(Line, {"x1":"12.035268553439892","y1":"4.999996485714291","x2":"12.025268553439673","y2":"4.999996485714291","key":"0"}),
    createElement(Line, {"x1":"12.035268553439892","y1":"11.999996485714291","x2":"12.025268553439673","y2":"11.999996485714291","key":"1"}),
    createElement(Line, {"x1":"12.035268553439892","y1":"18.999996485714291","x2":"12.025268553439673","y2":"18.999996485714291","key":"2"})
  );
});

DotsVerticalSmall.displayName = 'DotsVerticalSmall';

module.exports = DotsVerticalSmall;
module.exports.DotsVerticalSmall = DotsVerticalSmall;
module.exports.default = DotsVerticalSmall;
