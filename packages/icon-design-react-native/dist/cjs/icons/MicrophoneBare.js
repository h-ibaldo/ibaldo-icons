'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const MicrophoneBare = forwardRef(function MicrophoneBare(
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
    createElement(Path, {"d":"M12 15C9.789 15 8 13.211 8 11L8 6C8 3.789 9.789 2 12 2C14.211 2 16 3.789 16 6L16 11C16 13.211 14.211 15 12 15Z","key":"0"}),
    createElement(Path, {"d":"M12 19L12 22","key":"1"}),
    createElement(Path, {"d":"M5.094 15C6.473 17.387 9.043 19 12 19C14.957 19 17.527 17.387 18.906 15","key":"2"})
  );
});

MicrophoneBare.displayName = 'MicrophoneBare';

module.exports = MicrophoneBare;
module.exports.MicrophoneBare = MicrophoneBare;
module.exports.default = MicrophoneBare;
