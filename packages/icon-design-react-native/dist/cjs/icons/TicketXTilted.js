'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TicketXTilted = forwardRef(function TicketXTilted(
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
    createElement(Path, {"d":"M7.484 4.66L10 2L22 14L19.484 16.66C19.129 16.336 18.66 16.141 18.141 16.141C17.039 16.141 16.141 17.039 16.141 18.141C16.141 18.66 16.336 19.129 16.66 19.484L14 22L2 10L4.66 7.484C5.012 7.805 5.484 8 6 8C7.105 8 8 7.105 8 6C8 5.484 7.805 5.012 7.484 4.66Z","key":"0"}),
    createElement(Path, {"d":"M7 13L8 12","key":"1"}),
    createElement(Path, {"d":"M13 7L14 6","key":"2"}),
    createElement(Path, {"d":"M11 9L10 10","key":"3"}),
    createElement(Path, {"d":"M18 6L22 2","key":"4"}),
    createElement(Path, {"d":"M18 2L22 6","key":"5"})
  );
});

TicketXTilted.displayName = 'TicketXTilted';

module.exports = TicketXTilted;
module.exports.TicketXTilted = TicketXTilted;
module.exports.default = TicketXTilted;
