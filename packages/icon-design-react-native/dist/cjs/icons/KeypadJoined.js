'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Rect } = RNSvg;

const KeypadJoined = forwardRef(function KeypadJoined(
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
    createElement(Rect, {"x":"2.974731449503452","y":"2.000000000478394","width":"6","height":"4.999999999998181","rx":"1.999999999998181","ry":"1.999999999998181","key":"0"}),
    createElement(Rect, {"x":"8.974731449503452","y":"2.000000000478394","width":"6","height":"4.999999999998181","rx":"1.999999999998181","ry":"1.999999999998181","key":"1"}),
    createElement(Rect, {"x":"14.974731449503452","y":"2.000000000478394","width":"6","height":"4.999999999998181","rx":"1.999999999998181","ry":"1.999999999998181","key":"2"}),
    createElement(Rect, {"x":"2.974731449503452","y":"7.000000000480213","width":"6","height":"5","rx":"2","ry":"2","key":"3"}),
    createElement(Rect, {"x":"8.974731449503452","y":"7.000000000480213","width":"6","height":"5","rx":"2","ry":"2","key":"4"}),
    createElement(Rect, {"x":"14.974731449503452","y":"7.000000000480213","width":"6","height":"5","rx":"2","ry":"2","key":"5"}),
    createElement(Rect, {"x":"2.974731449503452","y":"12.000000000480213","width":"6","height":"5","rx":"2","ry":"2","key":"6"}),
    createElement(Rect, {"x":"8.974731449503452","y":"12.000000000480213","width":"6","height":"5","rx":"2","ry":"2","key":"7"}),
    createElement(Rect, {"x":"8.974731449503452","y":"17.000000000480213","width":"6","height":"5","rx":"2","ry":"2","key":"8"}),
    createElement(Rect, {"x":"14.974731449503452","y":"12.000000000480213","width":"6","height":"5","rx":"2","ry":"2","key":"9"})
  );
});

KeypadJoined.displayName = 'KeypadJoined';

module.exports = KeypadJoined;
module.exports.KeypadJoined = KeypadJoined;
module.exports.default = KeypadJoined;
