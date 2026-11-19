'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const WindowArrowUp = forwardRef(function WindowArrowUp(
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
    createElement(Path, {"d":"M6,18h-2c-1.104569499661011,0-2-.895430500338989-2-2V4c0-1.104569499661011.895430500338989-2,2-2h16c1.104569499661011,0,2,.895430500338989,2,2v12c0,1.104569499661011-.895430500338989,2-2,2h-2","key":"0"}),
    createElement(Line, {"x1":"2","y1":"8","x2":"22","y2":"8","key":"1"}),
    createElement(Line, {"x1":"5.010000000000218","y1":"5","x2":"5","y2":"5","key":"2"}),
    createElement(Line, {"x1":"8.010000000000218","y1":"5","x2":"8","y2":"5","key":"3"}),
    createElement(Line, {"x1":"11.010000000000218","y1":"5","x2":"11","y2":"5","key":"4"}),
    createElement(Polyline, {"points":"9 15 12 12 15 15","key":"5"}),
    createElement(Path, {"d":"M12,12v6c0,2.209138999322022-1.790861000679797,4-4,4h-1","key":"6"})
  );
});

WindowArrowUp.displayName = 'WindowArrowUp';

module.exports = WindowArrowUp;
module.exports.WindowArrowUp = WindowArrowUp;
module.exports.default = WindowArrowUp;
