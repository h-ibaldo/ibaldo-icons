'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const StopwatchFastTick = forwardRef(function StopwatchFastTick(
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
    createElement(Path, {"d":"M14 2L14 5","key":"0"}),
    createElement(Path, {"d":"M12 2L16 2","key":"1"}),
    createElement(Path, {"d":"M16 10L14 13","key":"2"}),
    createElement(Path, {"d":"M22 6L21 7","key":"3"}),
    createElement(Path, {"d":"M2 13L8 13","key":"4"}),
    createElement(Path, {"d":"M6 21L8 21","key":"5"}),
    createElement(Path, {"d":"M4 17L8 17","key":"6"}),
    createElement(Path, {"d":"M12 20.738C12.641 20.902 13.309 21 14 21C18.418 21 22 17.418 22 13C22 8.582 18.418 5 14 5C11.039 5 8.465 6.609 7.078 9","key":"7"})
  );
});

StopwatchFastTick.displayName = 'StopwatchFastTick';

module.exports = StopwatchFastTick;
module.exports.StopwatchFastTick = StopwatchFastTick;
module.exports.default = StopwatchFastTick;
