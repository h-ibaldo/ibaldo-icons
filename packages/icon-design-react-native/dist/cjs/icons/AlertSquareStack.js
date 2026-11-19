'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Rect } = RNSvg;

const AlertSquareStack = forwardRef(function AlertSquareStack(
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
    createElement(Rect, {"x":"2.000000005000402","y":"2.000000003886271","width":"16","height":"16","rx":"3","ry":"3","key":"0"}),
    createElement(Path, {"d":"M22.000000005000402,9.000000003886271v10c0,1.656854249493335-1.343145750510303,3-3,3h-10","key":"1"}),
    createElement(Line, {"x1":"10.000000005000402","y1":"13.010000003887399","x2":"10.000000005000402","y2":"13.000000003886271","key":"2"}),
    createElement(Line, {"x1":"10.000000005000402","y1":"7.000000003886271","x2":"10.000000005000402","y2":"10.000000003886271","key":"3"})
  );
});

AlertSquareStack.displayName = 'AlertSquareStack';

module.exports = AlertSquareStack;
module.exports.AlertSquareStack = AlertSquareStack;
module.exports.default = AlertSquareStack;
