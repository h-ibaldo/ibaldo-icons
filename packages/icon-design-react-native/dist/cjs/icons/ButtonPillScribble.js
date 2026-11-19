'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Polyline, Rect } = RNSvg;

const ButtonPillScribble = forwardRef(function ButtonPillScribble(
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
    createElement(Rect, {"x":"1.999999995185689","y":"6.999999997010121","width":"20.000000000000028","height":"10.000000007293295","rx":"4.99999500897246","ry":"4.99999500897246","key":"0"}),
    createElement(Polyline, {"points":"6.999999990797733 13.000000000448381 8.999999990797733 11.000000000448381 10.999999990797733 13.000000000448381 12.999999990797733 11.000000000448381 14.999999990797733 13.000000000448381 16.999999990797733 11.000000000448381","key":"1"})
  );
});

ButtonPillScribble.displayName = 'ButtonPillScribble';

module.exports = ButtonPillScribble;
module.exports.ButtonPillScribble = ButtonPillScribble;
module.exports.default = ButtonPillScribble;
