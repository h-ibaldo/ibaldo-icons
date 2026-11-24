'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const ListCheckbox = forwardRef(function ListCheckbox(
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
    createElement(Line, {"x1":"9.974731449547107","y1":"4.000000000570253","x2":"21.974731449547107","y2":"4.000000000570253","key":"0"}),
    createElement(Line, {"x1":"9.974731449547107","y1":"12.000000000571163","x2":"21.974731449547107","y2":"12.000000000571163","key":"1"}),
    createElement(Line, {"x1":"9.974731449547107","y1":"20.000000000571163","x2":"21.974731449547107","y2":"20.000000000571163","key":"2"}),
    createElement(Rect, {"x":"1.974731449459796","y":"2.000000000661203","width":"4.000000000087311","height":"3.999999999909051","key":"3"}),
    createElement(Rect, {"x":"1.974731449459796","y":"10.000000000571163","width":"4.000000000087311","height":"3.999999999909051","key":"4"}),
    createElement(Rect, {"x":"1.974731449459796","y":"18.000000000571163","width":"4.000000000087311","height":"3.999999999909051","key":"5"})
  );
});

ListCheckbox.displayName = 'ListCheckbox';

module.exports = ListCheckbox;
module.exports.ListCheckbox = ListCheckbox;
module.exports.default = ListCheckbox;
