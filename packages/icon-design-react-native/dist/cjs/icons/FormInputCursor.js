'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const FormInputCursor = forwardRef(function FormInputCursor(
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
    createElement(Path, {"d":"M22,18.999999999999091H4.160246899467893c-1.19307141844547,0-2.160246899467893-.967175481022423-2.160246899467893-2.160246899467893V7.160246899468802c0-1.19307141844547.967175481022423-2.160246899467893,2.160246899467893-2.160246899467893h17.839753100532107","key":"0"}),
    createElement(Polyline, {"points":"5.999999999978172 10.000000000044565 5.999999999978172 9.000000000044565 7.999999999978172 9.000000000044565","key":"1"}),
    createElement(Polyline, {"points":"12 10 11.999999999954525 9 9.999999999954525 9.00000000009004","key":"2"}),
    createElement(Line, {"x1":"9.000000000001819","y1":"10","x2":"9.000000000001819","y2":"14","key":"3"}),
    createElement(Line, {"x1":"10","y1":"15","x2":"11","y2":"15","key":"4"}),
    createElement(Line, {"x1":"7","y1":"15","x2":"8","y2":"15","key":"5"}),
    createElement(Line, {"x1":"15.000000000001819","y1":"15.000000000000909","x2":"15","y2":"14.990000000000691","key":"6"}),
    createElement(Line, {"x1":"19","y1":"14.990000000000691","x2":"18.999999999998181","y2":"15.000000000000909","key":"7"})
  );
});

FormInputCursor.displayName = 'FormInputCursor';

module.exports = FormInputCursor;
module.exports.FormInputCursor = FormInputCursor;
module.exports.default = FormInputCursor;
