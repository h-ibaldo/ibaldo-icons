'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FormControlsCheck = forwardRef(function FormControlsCheck(
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
    createElement(Path, {"d":"M16.5 15L7.5 15C5.566 15 4 16.566 4 18.5C4 20.434 5.566 22 7.5 22L16.5 22C18.434 22 20 20.434 20 18.5C20 16.566 18.434 15 16.5 15Z","key":"0"}),
    createElement(Path, {"d":"M11 2L2 2L2 11L11 11Z","key":"1"}),
    createElement(Path, {"d":"M22 6.5C22 4.289 20.211 2.5 18 2.5C15.789 2.5 14 4.289 14 6.5C14 8.711 15.789 10.5 18 10.5C20.211 10.5 22 8.711 22 6.5Z","key":"2"}),
    createElement(Path, {"d":"M18.5 6.5C18.5 6.223 18.277 6 18 6C17.723 6 17.5 6.223 17.5 6.5C17.5 6.777 17.723 7 18 7C18.277 7 18.5 6.777 18.5 6.5Z","key":"3"}),
    createElement(Path, {"d":"M8 22C9.934 22 11.5 20.434 11.5 18.5C11.5 16.566 9.934 15 8 15","key":"4"}),
    createElement(Path, {"d":"M5 7L6 8L8 5","key":"5"})
  );
});

FormControlsCheck.displayName = 'FormControlsCheck';

module.exports = FormControlsCheck;
module.exports.FormControlsCheck = FormControlsCheck;
module.exports.default = FormControlsCheck;
