'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LinkBrokenDoubleCompact = forwardRef(function LinkBrokenDoubleCompact(
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
    createElement(Path, {"d":"M8 16L16 8","key":"0"}),
    createElement(Path, {"d":"M13 17L11.004 19.02C9.344 20.676 6.656 20.676 4.996 19.02C3.34 17.359 3.34 14.676 4.992 13.02L7 10.98","key":"1"}),
    createElement(Path, {"d":"M11 7L12.996 4.98C14.656 3.324 17.344 3.324 19.004 4.98C20.66 6.641 20.66 9.324 19.008 10.98L17 13.02","key":"2"}),
    createElement(Path, {"d":"M5 8L2 7","key":"3"}),
    createElement(Path, {"d":"M8 5L7 2","key":"4"}),
    createElement(Path, {"d":"M19 16L22 17","key":"5"}),
    createElement(Path, {"d":"M16 19L17 22","key":"6"})
  );
});

LinkBrokenDoubleCompact.displayName = 'LinkBrokenDoubleCompact';

module.exports = LinkBrokenDoubleCompact;
module.exports.LinkBrokenDoubleCompact = LinkBrokenDoubleCompact;
module.exports.default = LinkBrokenDoubleCompact;
