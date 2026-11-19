'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const Cake = forwardRef(function Cake(
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
    createElement(Path, {"d":"M4 22L4 14.402C4 13.301 4.895 12.402 6 12.402L18 12.402C19.105 12.402 20 13.301 20 14.402L20 22","key":"0"}),
    createElement(Path, {"d":"M12 2L9.996 5.34C9.402 6.199 9.426 7.348 10.051 8.184C11.027 9.48 12.973 9.48 13.949 8.184C14.574 7.348 14.598 6.199 14.004 5.34Z","key":"1"}),
    createElement(Path, {"d":"M12 10L12 12.402","key":"2"}),
    createElement(Path, {"d":"M2 22L22 22","key":"3"}),
    createElement(Path, {"d":"M4 16.07L4.891 16.664C5.563 17.113 6.438 17.113 7.109 16.664L7.891 16.145C8.563 15.695 9.438 15.695 10.109 16.145L10.891 16.664C11.563 17.113 12.438 17.113 13.109 16.664L13.891 16.145C14.563 15.695 15.438 15.695 16.109 16.145L16.891 16.664C17.563 17.113 18.438 17.113 19.109 16.664L20 16.07","key":"4"})
  );
});

Cake.displayName = 'Cake';

module.exports = Cake;
module.exports.Cake = Cake;
module.exports.default = Cake;
