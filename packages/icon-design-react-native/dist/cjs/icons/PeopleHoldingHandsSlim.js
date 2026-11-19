'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PeopleHoldingHandsSlim = forwardRef(function PeopleHoldingHandsSlim(
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
    createElement(Path, {"d":"M3 22L3 11.5C3 10.117 4.117 9 5.5 9L8 9L8 22","key":"0"}),
    createElement(Path, {"d":"M8 4.5C8 5.883 6.883 7 5.5 7C4.117 7 3 5.883 3 4.5C3 3.117 4.117 2 5.5 2C6.883 2 8 3.117 8 4.5Z","key":"1"}),
    createElement(Path, {"d":"M3 17L8 17","key":"2"}),
    createElement(Path, {"d":"M21 22L21 11.5C21 10.117 19.883 9 18.5 9L16 9L16 22","key":"3"}),
    createElement(Path, {"d":"M16 4.5C16 5.883 17.117 7 18.5 7C19.883 7 21 5.883 21 4.5C21 3.117 19.883 2 18.5 2C17.117 2 16 3.117 16 4.5Z","key":"4"}),
    createElement(Path, {"d":"M21 17L16 17","key":"5"}),
    createElement(Path, {"d":"M8 9L12 14L16 9","key":"6"})
  );
});

PeopleHoldingHandsSlim.displayName = 'PeopleHoldingHandsSlim';

module.exports = PeopleHoldingHandsSlim;
module.exports.PeopleHoldingHandsSlim = PeopleHoldingHandsSlim;
module.exports.default = PeopleHoldingHandsSlim;
