'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const WindowMinusPlain = forwardRef(function WindowMinusPlain(
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
    createElement(Path, {"d":"M11.025268553292335,21.99877930339062h-6c-1.656854249498792,0-3-1.343145750510303-3-3V4.99877930339062c0-1.656854249493335,1.343145750501208-3,3-3h14c1.656854249491516,0,3,1.343145750506665,3,3v8","key":"0"}),
    createElement(Line, {"x1":"2.025268553292335","y1":"7.99877930339062","x2":"22.025268553292335","y2":"7.99877930339062","key":"1"}),
    createElement(Line, {"x1":"22.025268553292335","y1":"17.99877930339062","x2":"14.025268553292335","y2":"17.99877930339062","key":"2"})
  );
});

WindowMinusPlain.displayName = 'WindowMinusPlain';

module.exports = WindowMinusPlain;
module.exports.WindowMinusPlain = WindowMinusPlain;
module.exports.default = WindowMinusPlain;
