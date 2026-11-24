'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ScanBeam = forwardRef(function ScanBeam(
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
    createElement(Path, {"d":"M2 7L2 3C2 2.449 2.445 2 3 2L7 2","key":"0"}),
    createElement(Path, {"d":"M22 7L22 3C22 2.449 21.555 2 21 2L17 2","key":"1"}),
    createElement(Path, {"d":"M2 17L2 21C2 21.551 2.445 22 3 22L7 22","key":"2"}),
    createElement(Path, {"d":"M22 17L22 21C22 21.551 21.555 22 21 22L17 22","key":"3"}),
    createElement(Path, {"d":"M2 12L22 12","key":"4"})
  );
});

ScanBeam.displayName = 'ScanBeam';

module.exports = ScanBeam;
module.exports.ScanBeam = ScanBeam;
module.exports.default = ScanBeam;
