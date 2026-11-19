'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const FormDropdownDot = forwardRef(function FormDropdownDot(
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
    createElement(Rect, {"x":"1.974731444101053","y":"7.99999999557258","width":"20","height":"7.999999999996362","rx":"1","ry":"1","key":"0"}),
    createElement(Line, {"x1":"13.974731444101053","y1":"7.999999995576218","x2":"13.974731444101053","y2":"15.999999995568942","key":"1"}),
    createElement(Line, {"x1":"17.964731444100835","y1":"11.99999999557258","x2":"17.974731444101053","y2":"11.99999999557258","key":"2"})
  );
});

FormDropdownDot.displayName = 'FormDropdownDot';

module.exports = FormDropdownDot;
module.exports.FormDropdownDot = FormDropdownDot;
module.exports.default = FormDropdownDot;
