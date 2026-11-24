'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const SunCircleSplitSparse = forwardRef(function SunCircleSplitSparse(
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
    createElement(Path, {"d":"M19.133 5C17.316 3.152 14.793 2 12 2C9.203 2 6.676 3.152 4.863 5","key":"0"}),
    createElement(Path, {"d":"M2.367 9.332C1.676 11.832 1.945 14.59 3.344 17.012C4.746 19.43 7.004 21.043 9.512 21.688","key":"1"}),
    createElement(Path, {"d":"M21.633 9.332C22.324 11.832 22.055 14.59 20.656 17.012C19.254 19.43 16.996 21.043 14.488 21.688","key":"2"}),
    createElement(Path, {"d":"M14 12C14 10.895 13.105 10 12 10C10.895 10 10 10.895 10 12C10 13.105 10.895 14 12 14C13.105 14 14 13.105 14 12Z","key":"3"}),
    createElement(Path, {"d":"M12 6L12 7","key":"4"}),
    createElement(Path, {"d":"M12 17L12 18","key":"5"}),
    createElement(Path, {"d":"M6.805 9L7.668 9.5","key":"6"}),
    createElement(Path, {"d":"M16.332 14.5L17.195 15","key":"7"}),
    createElement(Path, {"d":"M6.805 15L7.668 14.5","key":"8"}),
    createElement(Path, {"d":"M16.332 9.5L17.195 9","key":"9"})
  );
});

SunCircleSplitSparse.displayName = 'SunCircleSplitSparse';

module.exports = SunCircleSplitSparse;
module.exports.SunCircleSplitSparse = SunCircleSplitSparse;
module.exports.default = SunCircleSplitSparse;
