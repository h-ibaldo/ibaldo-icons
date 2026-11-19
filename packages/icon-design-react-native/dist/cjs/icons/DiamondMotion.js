'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Polyline } = RNSvg;

const DiamondMotion = forwardRef(function DiamondMotion(
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
    createElement(Polyline, {"points":"16.999999981000656 2.999996564421963 11.999999981000656 11.999996564421963 16.999999981000656 20.999996564421963","key":"0"}),
    createElement(Polyline, {"points":"11.999999981000656 2.999996564421963 6.999999981000656 11.999996564421963 11.999999981000656 20.999996564421963","key":"1"}),
    createElement(Polyline, {"points":"6.999999981000656 2.999996564421963 1.999999981000656 11.999996564421963 6.999999981000656 20.999996564421963","key":"2"}),
    createElement(Polyline, {"points":"16.999999981000656 20.999996564421963 21.999999981000656 11.999996564425601 16.999999981000656 2.999996564421963","key":"3"})
  );
});

DiamondMotion.displayName = 'DiamondMotion';

module.exports = DiamondMotion;
module.exports.DiamondMotion = DiamondMotion;
module.exports.default = DiamondMotion;
