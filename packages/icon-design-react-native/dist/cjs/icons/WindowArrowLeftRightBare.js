'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const WindowArrowLeftRightBare = forwardRef(function WindowArrowLeftRightBare(
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
    createElement(Polyline, {"points":"14.00000000018008 22.000000000448381 16.00000000018008 20.000000000448381 14.00000000018008 18.000000000448381","key":"0"}),
    createElement(Line, {"x1":"8.00000000018008","y1":"20.000000000448381","x2":"16.00000000018008","y2":"20.000000000448381","key":"1"}),
    createElement(Polyline, {"points":"10.000000000369255 12.000000000446562 8.00000000018008 14.000000000268301 10.000000000010914 16.000000000446562","key":"2"}),
    createElement(Line, {"x1":"16.00000000018008","y1":"14.000000000986802","x2":"8.00000000018008","y2":"14.000000000268301","key":"3"}),
    createElement(Path, {"d":"M4.00000000018008,20.0000000004502c-1.104569499659192-.000000000001819-2-.895430500338989-2-2.000000000001819V4.000000000448381c0-1.10456949966192.895430500340808-2,2-1.999999999998181l16-.000000000001819c1.104569499659192,0,2,.89543050033808,2,2v14c0,1.10456949966283-.895430500340808,2-2,2","key":"4"}),
    createElement(Line, {"x1":"5.010000000180298","y1":"5.000000000448381","x2":"5.00000000018008","y2":"5.000000000448381","key":"5"}),
    createElement(Line, {"x1":"8.010000000180298","y1":"5.000000000448381","x2":"8.00000000018008","y2":"5.000000000448381","key":"6"}),
    createElement(Line, {"x1":"11.010000000180298","y1":"5.000000000448381","x2":"11.00000000018008","y2":"5.000000000448381","key":"7"})
  );
});

WindowArrowLeftRightBare.displayName = 'WindowArrowLeftRightBare';

module.exports = WindowArrowLeftRightBare;
module.exports.WindowArrowLeftRightBare = WindowArrowLeftRightBare;
module.exports.default = WindowArrowLeftRightBare;
