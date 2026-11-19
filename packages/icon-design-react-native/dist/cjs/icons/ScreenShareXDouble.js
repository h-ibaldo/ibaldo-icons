'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const ScreenShareXDouble = forwardRef(function ScreenShareXDouble(
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
    createElement(Rect, {"x":"1.974731440099276","y":"2.000000003885361","width":"10","height":"6","rx":"1","ry":"1","key":"0"}),
    createElement(Line, {"x1":"4.974731440099276","y1":"11.000000003885361","x2":"8.974731440099276","y2":"11.000000003885361","key":"1"}),
    createElement(Rect, {"x":"11.974731440099276","y":"13.000000003885361","width":"10","height":"6","rx":"1","ry":"1","key":"2"}),
    createElement(Line, {"x1":"14.974731440099276","y1":"22.000000003885361","x2":"18.974731440099276","y2":"22.000000003885361","key":"3"}),
    createElement(Line, {"x1":"21.974731440099276","y1":"2.000000003885361","x2":"16.974731440099276","y2":"7.000000003885361","key":"4"}),
    createElement(Line, {"x1":"16.974731440099276","y1":"2.000000003954483","x2":"21.974731440170217","y2":"7.000000003885361","key":"5"}),
    createElement(Line, {"x1":"6.974731440099276","y1":"17.000000003885361","x2":"1.974731440099276","y2":"22.000000003885361","key":"6"}),
    createElement(Line, {"x1":"1.974731440099276","y1":"17.000000003954483","x2":"6.974731440170217","y2":"22.000000003885361","key":"7"})
  );
});

ScreenShareXDouble.displayName = 'ScreenShareXDouble';

module.exports = ScreenShareXDouble;
module.exports.ScreenShareXDouble = ScreenShareXDouble;
module.exports.default = ScreenShareXDouble;
