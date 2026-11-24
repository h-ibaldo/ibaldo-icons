'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BriefcaseFlapLatch = forwardRef(function BriefcaseFlapLatch(
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
    createElement(Path, {"d":"M19.586 21L4.414 21C3.082 21 2 19.918 2 18.586L2 9.414C2 8.082 3.082 7 4.414 7L19.586 7C20.918 7 22 8.082 22 9.414L22 18.586C22 19.918 20.918 21 19.586 21Z","key":"0"}),
    createElement(Path, {"d":"M16 7L8 7L8 4C8 3.449 8.449 3 9 3L15 3C15.551 3 16 3.449 16 4Z","key":"1"}),
    createElement(Path, {"d":"M2.305 8.262L7 14L17 14L21.695 8.262","key":"2"}),
    createElement(Path, {"d":"M12 12L12 16","key":"3"})
  );
});

BriefcaseFlapLatch.displayName = 'BriefcaseFlapLatch';

module.exports = BriefcaseFlapLatch;
module.exports.BriefcaseFlapLatch = BriefcaseFlapLatch;
module.exports.default = BriefcaseFlapLatch;
