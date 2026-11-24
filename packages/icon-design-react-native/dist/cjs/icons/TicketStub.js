'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const TicketStub = forwardRef(function TicketStub(
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
    createElement(Path, {"d":"M10 6L10 18","key":"0"}),
    createElement(Path, {"d":"M21.961 9L22 9L22 5L2 5L2 9L2.039 9C3.676 9 5 10.324 5 11.961C5 13.594 3.676 14.918 2.039 14.918L2 14.918L2 19L22 19L22 14.918L21.961 14.918C20.324 14.918 19 13.594 19 11.961C19 10.324 20.324 9 21.961 9Z","key":"1"})
  );
});

TicketStub.displayName = 'TicketStub';

module.exports = TicketStub;
module.exports.TicketStub = TicketStub;
module.exports.default = TicketStub;
