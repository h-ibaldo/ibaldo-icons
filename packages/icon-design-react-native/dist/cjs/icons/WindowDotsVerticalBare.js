'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const WindowDotsVerticalBare = forwardRef(function WindowDotsVerticalBare(
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
    createElement(Path, {"d":"M22.00000000018008,16.000000000448381v4.000000000008185c0,1.104569499663739-.895430500340808,2-2,2l-16,.000000000002728c-1.104569499659192,0-2-.89543050033717-2-2V4.000000000456566c0-1.104569499661011.895430500340808-1.999999999997272,2-1.999999999997272l13-.000000000002728","key":"0"}),
    createElement(Line, {"x1":"22.00000000018008","y1":"10.010000000456785","x2":"22.00000000018008","y2":"10.000000000456566","key":"1"}),
    createElement(Line, {"x1":"22.00000000018008","y1":"6.010000000456785","x2":"22.00000000018008","y2":"6.000000000456566","key":"2"}),
    createElement(Line, {"x1":"22.00000000018008","y1":"2.010000000456785","x2":"22.00000000018008","y2":"2.000000000456566","key":"3"}),
    createElement(Line, {"x1":"5.010000000180298","y1":"5.000000000448381","x2":"5.00000000018008","y2":"5.000000000448381","key":"4"}),
    createElement(Line, {"x1":"8.010000000180298","y1":"5.000000000448381","x2":"8.00000000018008","y2":"5.000000000448381","key":"5"}),
    createElement(Line, {"x1":"11.010000000180298","y1":"5.000000000448381","x2":"11.00000000018008","y2":"5.000000000448381","key":"6"})
  );
});

WindowDotsVerticalBare.displayName = 'WindowDotsVerticalBare';

module.exports = WindowDotsVerticalBare;
module.exports.WindowDotsVerticalBare = WindowDotsVerticalBare;
module.exports.default = WindowDotsVerticalBare;
