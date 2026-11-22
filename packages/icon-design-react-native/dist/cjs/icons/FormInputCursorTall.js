'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FormInputCursorTall = forwardRef(function FormInputCursorTall(
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
    createElement(Path, {"d":"M3 2L6 2L8 4L10 2L13 2","key":"0"}),
    createElement(Path, {"d":"M13 22L10 22L8 20L6 22L3 22","key":"1"}),
    createElement(Path, {"d":"M8 4L8 20","key":"2"}),
    createElement(Path, {"d":"M5 15L4 15C2.895 15 2 14.105 2 13L2 11C2 9.895 2.895 9 4 9L5 9","key":"3"}),
    createElement(Path, {"d":"M11 9L20 9C21.105 9 22 9.895 22 11L22 13C22 14.105 21.105 15 20 15L11.043 15","key":"4"})
  );
});

FormInputCursorTall.displayName = 'FormInputCursorTall';

module.exports = FormInputCursorTall;
module.exports.FormInputCursorTall = FormInputCursorTall;
module.exports.default = FormInputCursorTall;
