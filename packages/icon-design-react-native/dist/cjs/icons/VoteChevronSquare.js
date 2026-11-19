'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polyline, Rect } = RNSvg;

const VoteChevronSquare = forwardRef(function VoteChevronSquare(
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
    createElement(Rect, {"x":"5.016630450972116","y":"2.000000000480213","width":"14","height":"20","rx":"2","ry":"2","key":"0"}),
    createElement(Polyline, {"points":"10.016630450974844 8.000000000480213 12.016630450974844 6.000000000480213 14.016630450974844 8.000000000480213","key":"1"}),
    createElement(Polyline, {"points":"14.016630451063975 16.000000000658474 12.016630450883895 18.000000000476575 10.016630451063975 16.000000000298314","key":"2"}),
    createElement(Line, {"x1":"5.016630450972116","y1":"12.000000000480213","x2":"19.016630450972116","y2":"12.000000000480213","key":"3"})
  );
});

VoteChevronSquare.displayName = 'VoteChevronSquare';

module.exports = VoteChevronSquare;
module.exports.VoteChevronSquare = VoteChevronSquare;
module.exports.default = VoteChevronSquare;
