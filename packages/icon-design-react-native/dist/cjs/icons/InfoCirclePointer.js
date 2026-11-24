'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const InfoCirclePointer = forwardRef(function InfoCirclePointer(
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
    createElement(Path, {"d":"M16 15C16 11.133 12.867 8 9 8C5.133 8 2 11.133 2 15C2 18.867 5.133 22 9 22C12.867 22 16 18.867 16 15Z","key":"0"}),
    createElement(Path, {"d":"M21.797 2.809L20.215 9.145C20.121 9.52 19.652 9.652 19.375 9.375L14.625 4.625C14.352 4.348 14.48 3.879 14.855 3.785L21.191 2.203C21.559 2.109 21.891 2.441 21.797 2.809Z","key":"1"}),
    createElement(Path, {"d":"M9 12L9 12","key":"2"}),
    createElement(Path, {"d":"M9 18L9 15","key":"3"})
  );
});

InfoCirclePointer.displayName = 'InfoCirclePointer';

module.exports = InfoCirclePointer;
module.exports.InfoCirclePointer = InfoCirclePointer;
module.exports.default = InfoCirclePointer;
