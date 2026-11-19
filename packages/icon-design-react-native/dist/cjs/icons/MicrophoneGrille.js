'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const MicrophoneGrille = forwardRef(function MicrophoneGrille(
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
    createElement(Path, {"d":"M12.219 18L11.781 18C9.141 18 7 15.859 7 13.219L7 6.781C7 4.141 9.141 2 11.781 2L12.219 2C14.859 2 17 4.141 17 6.781L17 13.219C17 15.859 14.859 18 12.219 18Z","key":"0"}),
    createElement(Path, {"d":"M12 18L12 21","key":"1"}),
    createElement(Path, {"d":"M10 8L7 8","key":"2"}),
    createElement(Path, {"d":"M10 12L7 12","key":"3"}),
    createElement(Path, {"d":"M17 8L14 8","key":"4"}),
    createElement(Path, {"d":"M17 12L14 12","key":"5"}),
    createElement(Path, {"d":"M7 22L17 22","key":"6"})
  );
});

MicrophoneGrille.displayName = 'MicrophoneGrille';

module.exports = MicrophoneGrille;
module.exports.MicrophoneGrille = MicrophoneGrille;
module.exports.default = MicrophoneGrille;
