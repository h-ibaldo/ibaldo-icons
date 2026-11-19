'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const UploadTrayStep = forwardRef(function UploadTrayStep(
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
    createElement(Path, {"d":"M7 8L12 3L17 8","key":"0"}),
    createElement(Path, {"d":"M12 16L12 3","key":"1"}),
    createElement(Path, {"d":"M22 18L19 18L19 21L5 21L5 18L2 18","key":"2"})
  );
});

UploadTrayStep.displayName = 'UploadTrayStep';

module.exports = UploadTrayStep;
module.exports.UploadTrayStep = UploadTrayStep;
module.exports.default = UploadTrayStep;
