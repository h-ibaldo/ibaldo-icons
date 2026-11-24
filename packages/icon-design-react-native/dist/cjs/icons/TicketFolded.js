'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TicketFolded = forwardRef(function TicketFolded(
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
    createElement(Path, {"d":"M6 8L6 10","key":"0"}),
    createElement(Path, {"d":"M6 13L6 14","key":"1"}),
    createElement(Path, {"d":"M6 17L6 18","key":"2"}),
    createElement(Path, {"d":"M2 8L22 8L22 20L2 20Z","key":"3"}),
    createElement(Path, {"d":"M2 8L19 3L19 8","key":"4"})
  );
});

TicketFolded.displayName = 'TicketFolded';

module.exports = TicketFolded;
module.exports.TicketFolded = TicketFolded;
module.exports.default = TicketFolded;
