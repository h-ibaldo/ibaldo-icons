'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Spinner = forwardRef(function Spinner(
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
    createElement(Path, {"d":"M11.949462885140747,3.000000000480213C6.978900136940865,3.000000000480213,2.949462885140747,7.029437252280331,2.949462885140747,12.000000000480213s4.029437251800118,9,9,9c4.970562748198972,0,9-4.029437251800118,9-9","key":"0"})
  );
});

Spinner.displayName = 'Spinner';

module.exports = Spinner;
module.exports.Spinner = Spinner;
module.exports.default = Spinner;
