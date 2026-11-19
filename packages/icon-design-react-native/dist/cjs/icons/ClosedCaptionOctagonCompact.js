'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ClosedCaptionOctagonCompact = forwardRef(function ClosedCaptionOctagonCompact(
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
    createElement(Path, {"d":"M7.414 2.586L2.586 7.414C2.211 7.789 2 8.297 2 8.828L2 15.172C2 15.703 2.211 16.211 2.586 16.586L7.414 21.414C7.789 21.789 8.297 22 8.828 22L15.172 22C15.703 22 16.211 21.789 16.586 21.414L21.414 16.586C21.789 16.211 22 15.703 22 15.172L22 8.828C22 8.297 21.789 7.789 21.414 7.414L16.586 2.586C16.211 2.211 15.703 2 15.172 2L8.828 2C8.297 2 7.789 2.211 7.414 2.586Z","key":"0"}),
    createElement(Path, {"d":"M10 14L9 14C7.895 14 7 13.105 7 12C7 10.895 7.895 10 9 10L10 10","key":"1"}),
    createElement(Path, {"d":"M16 14L15 14C13.895 14 13 13.105 13 12C13 10.895 13.895 10 15 10L16 10","key":"2"})
  );
});

ClosedCaptionOctagonCompact.displayName = 'ClosedCaptionOctagonCompact';

module.exports = ClosedCaptionOctagonCompact;
module.exports.ClosedCaptionOctagonCompact = ClosedCaptionOctagonCompact;
module.exports.default = ClosedCaptionOctagonCompact;
