'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TicketStubSide = forwardRef(function TicketStubSide(
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
    createElement(Path, {"d":"M8 8L8 16","key":"0"}),
    createElement(Path, {"d":"M2 18L2 6L6 6C6 7.105 6.895 8 8 8C9.105 8 10 7.105 10 6L22 6L22 9C20.344 9 19 10.344 19 12C19 13.656 20.344 15 22 15L22 18L10 18C10 16.895 9.105 16 8 16C6.895 16 6 16.895 6 18Z","key":"1"})
  );
});

TicketStubSide.displayName = 'TicketStubSide';

module.exports = TicketStubSide;
module.exports.TicketStubSide = TicketStubSide;
module.exports.default = TicketStubSide;
