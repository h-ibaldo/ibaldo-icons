'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const WindowArrowLeftRight = forwardRef(function WindowArrowLeftRight(
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
    createElement(Path, {"d":"M8.000000000184627,22.000000000448381h-4c-1.10456949966192,0-2-.895430500338989-2-2V4.000000000448381c0-1.10456949966192.89543050033808-2,2-2h16c1.10456949966192,0,2,.89543050033808,2,2v6","key":"0"}),
    createElement(Line, {"x1":"2.000000000184627","y1":"8.000000000448381","x2":"22.000000000184627","y2":"8.000000000448381","key":"1"}),
    createElement(Polyline, {"points":"20.000000000184627 22.0000000004502 22.000000000184627 20.0000000004502 20.000000000184627 18.0000000004502","key":"2"}),
    createElement(Line, {"x1":"12.000000000184627","y1":"20.0000000004502","x2":"22.000000000184627","y2":"20.0000000004502","key":"3"}),
    createElement(Polyline, {"points":"14.000000000364707 12.000000000448381 12.000000000184627 14.000000000268301 14.000000000005457 16.000000000448381","key":"4"}),
    createElement(Line, {"x1":"22.000000000184627","y1":"14.000000000988621","x2":"12.000000000184627","y2":"14.000000000268301","key":"5"}),
    createElement(Line, {"x1":"5.010000000184846","y1":"5.000000000448381","x2":"5.000000000184627","y2":"5.000000000448381","key":"6"}),
    createElement(Line, {"x1":"8.010000000184846","y1":"5.000000000448381","x2":"8.000000000184627","y2":"5.000000000448381","key":"7"}),
    createElement(Line, {"x1":"11.010000000184846","y1":"5.000000000448381","x2":"11.000000000184627","y2":"5.000000000448381","key":"8"})
  );
});

WindowArrowLeftRight.displayName = 'WindowArrowLeftRight';

module.exports = WindowArrowLeftRight;
module.exports.WindowArrowLeftRight = WindowArrowLeftRight;
module.exports.default = WindowArrowLeftRight;
