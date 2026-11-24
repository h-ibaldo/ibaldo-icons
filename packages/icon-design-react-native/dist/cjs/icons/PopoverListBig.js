'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const PopoverListBig = forwardRef(function PopoverListBig(
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
    createElement(Path, {"d":"M19,18h-4l-3,4-3-4h-4c-1.104569499660101,0-2-.895430500338989-2-2V4c0-1.104569499661011.895430500339899-2,2-2h14c1.104569499670106,0,2,.895430500338989,2,2v12c0,1.104569499661011-.895430500329894,2-2,2Z","key":"0"}),
    createElement(Line, {"x1":"8.010000000000218","y1":"6","x2":"8","y2":"6","key":"1"}),
    createElement(Line, {"x1":"8.010000000000218","y1":"10","x2":"8","y2":"10","key":"2"}),
    createElement(Line, {"x1":"8.010000000000218","y1":"14","x2":"8","y2":"14","key":"3"}),
    createElement(Line, {"x1":"12","y1":"6","x2":"16","y2":"6","key":"4"}),
    createElement(Line, {"x1":"12","y1":"10","x2":"16","y2":"10","key":"5"}),
    createElement(Line, {"x1":"12","y1":"14","x2":"16","y2":"14","key":"6"})
  );
});

PopoverListBig.displayName = 'PopoverListBig';

module.exports = PopoverListBig;
module.exports.PopoverListBig = PopoverListBig;
module.exports.default = PopoverListBig;
