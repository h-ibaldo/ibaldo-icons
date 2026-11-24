'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const AlarmQuestionBare = forwardRef(function AlarmQuestionBare(
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
    createElement(Path, {"d":"M20 13C20 17.418 16.418 21 12 21C7.582 21 4 17.418 4 13C4 8.582 7.582 5 12 5C16.418 5 20 8.582 20 13Z","key":"0"}),
    createElement(Path, {"d":"M17 2L21 5","key":"1"}),
    createElement(Path, {"d":"M7 2L3 5","key":"2"}),
    createElement(Path, {"d":"M10 11C10 9.895 10.895 9 12 9C13.105 9 14 9.895 14 11C14 11.641 13.746 12.254 13.293 12.707L12 14","key":"3"}),
    createElement(Path, {"d":"M12 17L12 17","key":"4"})
  );
});

AlarmQuestionBare.displayName = 'AlarmQuestionBare';

module.exports = AlarmQuestionBare;
module.exports.AlarmQuestionBare = AlarmQuestionBare;
module.exports.default = AlarmQuestionBare;
