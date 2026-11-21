'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CreditCardSignal = forwardRef(function CreditCardSignal(
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
    createElement(Path, {"d":"M4 5L13 5C14.105 5 15 5.895 15 7L15 14C15 15.105 14.105 16 13 16L4 16C2.895 16 2 15.105 2 14L2 7C2 5.895 2.895 5 4 5Z","key":"0"}),
    createElement(Path, {"d":"M2 9L15 9","key":"1"}),
    createElement(Path, {"d":"M21 2L11.945 2L11.945 5","key":"2"}),
    createElement(Path, {"d":"M21 22L11.945 22L11.945 16","key":"3"}),
    createElement(Path, {"d":"M18 8C19.105 9.105 19.105 10.895 18 12","key":"4"}),
    createElement(Path, {"d":"M20 5.172C22.668 7.84 22.668 12.16 20 14.828","key":"5"})
  );
});

CreditCardSignal.displayName = 'CreditCardSignal';

module.exports = CreditCardSignal;
module.exports.CreditCardSignal = CreditCardSignal;
module.exports.default = CreditCardSignal;
