'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path, Polyline } = RNSvg;

const SubmitSquare = forwardRef(function SubmitSquare(
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
    createElement(Path, {"d":"M21.974731440100186,17.000000003885361H3.974731440100186c-1.104569499660101,0-2-.895430500338989-2-2V6.000000003885361c0-1.104569499661011.895430500339899-2,2-2h9c1.104569499670106,0,2,.895430500338989,2,2v7","key":"0"}),
    createElement(Polyline, {"points":"18.974731440100186 14.000000003885361 21.974731440100186 17.000000003885361 18.974731440100186 20.000000003885361","key":"1"}),
    createElement(Polyline, {"points":"5.974731440100186 10.500000003885361 7.974731440100186 12.500000003885361 10.974731440100186 8.500000003885361","key":"2"})
  );
});

SubmitSquare.displayName = 'SubmitSquare';

module.exports = SubmitSquare;
module.exports.SubmitSquare = SubmitSquare;
module.exports.default = SubmitSquare;
