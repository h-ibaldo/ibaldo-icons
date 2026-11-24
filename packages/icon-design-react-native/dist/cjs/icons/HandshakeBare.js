'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const HandshakeBare = forwardRef(function HandshakeBare(
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
    createElement(Path, {"d":"M2 16L5 16L7.82 18.82C8.543 19.543 9.613 19.797 10.582 19.473L11.395 19.203C11.793 19.07 12.152 18.848 12.449 18.551L14 17L14.586 17C15.492 17 16.359 16.641 17 16C17.535 15.465 17.496 14.582 16.914 14.094L12 10L10.461 11.539C9.652 12.348 8.348 12.348 7.539 11.539L7 11L10.875 6.348C11.535 5.559 12.648 5.324 13.57 5.785L18 8L22 8","key":"0"})
  );
});

HandshakeBare.displayName = 'HandshakeBare';

module.exports = HandshakeBare;
module.exports.HandshakeBare = HandshakeBare;
module.exports.default = HandshakeBare;
