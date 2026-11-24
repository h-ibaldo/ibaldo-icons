'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const PopoverUp = forwardRef(function PopoverUp(
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
    createElement(Line, {"x1":"8","y1":"17","x2":"16","y2":"17","key":"1"}),
    createElement(Line, {"x1":"8","y1":"13","x2":"16","y2":"13","key":"2"}),
    createElement(Line, {"x1":"8","y1":"9","x2":"16","y2":"9","key":"3"})
  );
});

PopoverUp.displayName = 'PopoverUp';

module.exports = PopoverUp;
module.exports.PopoverUp = PopoverUp;
module.exports.default = PopoverUp;
