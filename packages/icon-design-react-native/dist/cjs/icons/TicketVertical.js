'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TicketVertical = forwardRef(function TicketVertical(
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
    createElement(Path, {"d":"M5.805 15L5.805 2L6.652 2C7.461 2 8.191 2.488 8.5 3.238L10.484 8.059C10.719 8.629 11.273 9 11.891 9C12.508 9 13.066 8.637 13.316 8.07L15.473 3.191C15.793 2.469 16.512 2 17.301 2L17.805 2L17.805 15L17.301 15C16.512 15 15.793 15.469 15.473 16.191L13.316 21.07C13.066 21.637 12.508 22 11.891 22C11.273 22 10.719 21.629 10.484 21.059L8.5 16.238C8.191 15.488 7.461 15 6.652 15Z","key":"0"}),
    createElement(Path, {"d":"M11 15L12 17L13 15Z","key":"1"})
  );
});

TicketVertical.displayName = 'TicketVertical';

module.exports = TicketVertical;
module.exports.TicketVertical = TicketVertical;
module.exports.default = TicketVertical;
