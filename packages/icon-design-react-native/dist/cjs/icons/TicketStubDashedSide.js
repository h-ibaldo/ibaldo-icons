'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TicketStubDashedSide = forwardRef(function TicketStubDashedSide(
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
    createElement(Path, {"d":"M8 8L8 9","key":"0"}),
    createElement(Path, {"d":"M8 12L8 13","key":"1"}),
    createElement(Path, {"d":"M2 18L2 6L6 6C6 7.105 6.895 8 8 8C9.105 8 10 7.105 10 6L22 6L22 18L10 18C10 16.895 9.105 16 8 16C6.895 16 6 16.895 6 18Z","key":"2"})
  );
});

TicketStubDashedSide.displayName = 'TicketStubDashedSide';

module.exports = TicketStubDashedSide;
module.exports.TicketStubDashedSide = TicketStubDashedSide;
module.exports.default = TicketStubDashedSide;
