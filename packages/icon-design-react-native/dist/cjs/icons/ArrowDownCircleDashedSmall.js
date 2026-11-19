'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowDownCircleDashedSmall = forwardRef(function ArrowDownCircleDashedSmall(
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
    createElement(Path, {"d":"M5.371 4.52C5.07 4.785 4.789 5.074 4.523 5.371","key":"0"}),
    createElement(Path, {"d":"M4.523 18.625C4.789 18.926 5.07 19.215 5.371 19.48","key":"1"}),
    createElement(Path, {"d":"M10 2.199C9.602 2.281 9.215 2.395 8.836 2.52","key":"2"}),
    createElement(Path, {"d":"M8.836 21.48C9.215 21.605 9.602 21.719 10 21.801","key":"3"}),
    createElement(Path, {"d":"M2.207 14C2.289 14.398 2.395 14.785 2.52 15.164","key":"4"}),
    createElement(Path, {"d":"M2.52 8.836C2.395 9.215 2.289 9.602 2.207 10","key":"5"}),
    createElement(Path, {"d":"M18.629 19.48C18.93 19.215 19.211 18.926 19.477 18.629","key":"6"}),
    createElement(Path, {"d":"M19.477 5.375C19.211 5.074 18.93 4.785 18.629 4.52","key":"7"}),
    createElement(Path, {"d":"M14 21.801C14.398 21.719 14.785 21.605 15.164 21.48","key":"8"}),
    createElement(Path, {"d":"M15.164 2.52C14.785 2.395 14.398 2.281 14 2.199","key":"9"}),
    createElement(Path, {"d":"M21.793 10C21.711 9.602 21.605 9.215 21.48 8.836","key":"10"}),
    createElement(Path, {"d":"M21.48 15.164C21.605 14.785 21.711 14.398 21.793 14","key":"11"}),
    createElement(Path, {"d":"M15 13L12 16L9 13","key":"12"}),
    createElement(Path, {"d":"M12 8L12 16","key":"13"})
  );
});

ArrowDownCircleDashedSmall.displayName = 'ArrowDownCircleDashedSmall';

module.exports = ArrowDownCircleDashedSmall;
module.exports.ArrowDownCircleDashedSmall = ArrowDownCircleDashedSmall;
module.exports.default = ArrowDownCircleDashedSmall;
