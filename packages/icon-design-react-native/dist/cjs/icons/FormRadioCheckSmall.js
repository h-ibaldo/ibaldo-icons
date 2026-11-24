'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FormRadioCheckSmall = forwardRef(function FormRadioCheckSmall(
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
    createElement(Path, {"d":"M12 12C12 14.762 9.762 17 7 17C4.238 17 2 14.762 2 12C2 9.238 4.238 7 7 7C9.762 7 12 9.238 12 12Z","key":"0"}),
    createElement(Path, {"d":"M5.25 12L6.418 13.168L8.75 10.832","key":"1"}),
    createElement(Path, {"d":"M16 12L21 12","key":"2"})
  );
});

FormRadioCheckSmall.displayName = 'FormRadioCheckSmall';

module.exports = FormRadioCheckSmall;
module.exports.FormRadioCheckSmall = FormRadioCheckSmall;
module.exports.default = FormRadioCheckSmall;
