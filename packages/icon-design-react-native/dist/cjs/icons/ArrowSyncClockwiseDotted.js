'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ArrowSyncClockwiseDotted = forwardRef(function ArrowSyncClockwiseDotted(
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
    createElement(Path, {"d":"M12 4L12 4","key":"0"}),
    createElement(Path, {"d":"M12 4L12 4","key":"1"}),
    createElement(Path, {"d":"M8.492 4.809L8.492 4.809","key":"2"}),
    createElement(Path, {"d":"M5.695 7.074L5.695 7.074","key":"3"}),
    createElement(Path, {"d":"M15.254 4.691L15.254 4.691","key":"4"}),
    createElement(Path, {"d":"M22 11L20 13L18 11","key":"5"}),
    createElement(Path, {"d":"M20 12C20 8.742 18.047 5.941 15.25 4.695","key":"6"}),
    createElement(Path, {"d":"M12 20L12 20","key":"7"}),
    createElement(Path, {"d":"M12 20L12 20","key":"8"}),
    createElement(Path, {"d":"M15.508 19.191L15.508 19.191","key":"9"}),
    createElement(Path, {"d":"M18.305 16.926L18.305 16.926","key":"10"}),
    createElement(Path, {"d":"M8.746 19.309L8.746 19.309","key":"11"}),
    createElement(Path, {"d":"M2 13L4 11L6 13","key":"12"}),
    createElement(Path, {"d":"M4 12C4 15.258 5.953 18.059 8.75 19.305","key":"13"})
  );
});

ArrowSyncClockwiseDotted.displayName = 'ArrowSyncClockwiseDotted';

module.exports = ArrowSyncClockwiseDotted;
module.exports.ArrowSyncClockwiseDotted = ArrowSyncClockwiseDotted;
module.exports.default = ArrowSyncClockwiseDotted;
