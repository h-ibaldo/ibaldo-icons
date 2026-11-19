'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const PopoverListUp = forwardRef(function PopoverListUp(
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
    createElement(Path, {"d":"M19,4h-5.000000238899702l-1.999999761100298-2-1.999999761090294,2h-5.000000238909706c-1.104569499660101,0-2,.895430500338989-2,2v14c0,1.104569499661011.895430500339899,2,2,2h14c1.104569499670106,0,2-.895430500338989,2-2V6c0-1.104569499661011-.895430500329894-2-2-2Z","key":"0"}),
    createElement(Line, {"x1":"8.060537104500327","y1":"16.997565477289754","x2":"8.050537104500108","y2":"16.997565477289754","key":"1"}),
    createElement(Line, {"x1":"8.060537104500327","y1":"12.997565477289754","x2":"8.050537104500108","y2":"12.997565477289754","key":"2"}),
    createElement(Line, {"x1":"8.060537104500327","y1":"8.997565477289754","x2":"8.050537104500108","y2":"8.997565477289754","key":"3"}),
    createElement(Line, {"x1":"12","y1":"17","x2":"16","y2":"17","key":"4"}),
    createElement(Line, {"x1":"12","y1":"13","x2":"16","y2":"13","key":"5"}),
    createElement(Line, {"x1":"12","y1":"9","x2":"16","y2":"9","key":"6"})
  );
});

PopoverListUp.displayName = 'PopoverListUp';

module.exports = PopoverListUp;
module.exports.PopoverListUp = PopoverListUp;
module.exports.default = PopoverListUp;
