'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TicketSlashSlim = forwardRef(function TicketSlashSlim(
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
    createElement(Path, {"d":"M6.484 3.66L8.141 2L22 15.859L20.34 17.516C19.988 17.195 19.516 17 19 17C17.895 17 17 17.895 17 19C17 19.516 17.195 19.988 17.516 20.34L15.859 22L2 8.141L3.66 6.484C4.012 6.805 4.484 7 5 7C6.105 7 7 6.105 7 5C7 4.484 6.805 4.012 6.484 3.66Z","key":"0"}),
    createElement(Path, {"d":"M6 12L7 11","key":"1"}),
    createElement(Path, {"d":"M11 7L12 6","key":"2"}),
    createElement(Path, {"d":"M17 7L22 2","key":"3"})
  );
});

TicketSlashSlim.displayName = 'TicketSlashSlim';

module.exports = TicketSlashSlim;
module.exports.TicketSlashSlim = TicketSlashSlim;
module.exports.default = TicketSlashSlim;
