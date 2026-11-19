'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const RewindSquare = forwardRef(function RewindSquare(
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
    createElement(Path, {"d":"M12 14.922L12 9.078C12 8.301 11.121 7.852 10.488 8.301L6.398 11.223C5.867 11.605 5.867 12.398 6.398 12.777L10.488 15.699C11.121 16.148 12 15.699 12 14.922Z","key":"0"}),
    createElement(Path, {"d":"M18 14.922L18 9.078C18 8.301 17.121 7.852 16.488 8.301L12.398 11.223C11.867 11.605 11.867 12.398 12.398 12.777L16.488 15.699C17.121 16.148 18 15.699 18 14.922Z","key":"1"}),
    createElement(Path, {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z","key":"2"})
  );
});

RewindSquare.displayName = 'RewindSquare';

module.exports = RewindSquare;
module.exports.RewindSquare = RewindSquare;
module.exports.default = RewindSquare;
