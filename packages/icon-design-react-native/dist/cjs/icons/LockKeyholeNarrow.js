'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Path, Rect } = RNSvg;

const LockKeyholeNarrow = forwardRef(function LockKeyholeNarrow(
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
    createElement(Rect, {"x":"4.974731441299809","y":"10.000000000589353","width":"14","height":"12","rx":"1","ry":"1","key":"0"}),
    createElement(Path, {"d":"M16.974731441299809,10.000000000589353v-3.000004999998055c0-2.761420987731981-2.238574012269964-4.999995000001945-4.999995000000126-4.999995000001945h-.000009999999747c-2.761420987730162,0-4.999995000000126,2.238574012269964-4.999995000000126,4.999995000001945v3.000004999998055","key":"1"}),
    createElement(Line, {"x1":"11.974731441299809","y1":"18.000000000589353","x2":"11.974731441299809","y2":"16.000000000589353","key":"2"}),
    createElement(Circle, {"cx":"11.974731441299809","cy":"15.000000000589353","r":"1","key":"3"})
  );
});

LockKeyholeNarrow.displayName = 'LockKeyholeNarrow';

module.exports = LockKeyholeNarrow;
module.exports.LockKeyholeNarrow = LockKeyholeNarrow;
module.exports.default = LockKeyholeNarrow;
