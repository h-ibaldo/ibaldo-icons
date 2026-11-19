'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const HeartAngular = forwardRef(function HeartAngular(
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
    createElement(Path, {"d":"M20.475006104339627,5.500000005168658c-1.932983398450233-1.932983398434772-5.067016601569776-1.932983398434772-7,0l-1.5,1.5-1.5-1.5c-1.932983398450233-1.932983398434772-5.067016601569776-1.932983398434772-7,0-1.932983398450233,1.932983398440228-1.932983398450233,5.067016601565228,0,7l8.5,8.5,8.5-8.5c1.932983398430224-1.932983398434772,1.932983398430224-5.067016601559772,0-7Z","key":"0"})
  );
});

HeartAngular.displayName = 'HeartAngular';

module.exports = HeartAngular;
module.exports.HeartAngular = HeartAngular;
module.exports.default = HeartAngular;
