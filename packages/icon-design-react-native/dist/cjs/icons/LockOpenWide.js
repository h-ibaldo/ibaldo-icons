'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path, Rect } = RNSvg;

const LockOpenWide = forwardRef(function LockOpenWide(
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
    createElement(Rect, {"x":"3.974731450040053","y":"13.000000003885361","width":"16","height":"9","rx":"1","ry":"1","key":"0"}),
    createElement(Path, {"d":"M16.974731450040053,7.000000003885361c0-2.76141357421875-2.238525390610448-5-5-5-2.761474609360448,0-5,2.23858642578125-5,5v6","key":"1"})
  );
});

LockOpenWide.displayName = 'LockOpenWide';

module.exports = LockOpenWide;
module.exports.LockOpenWide = LockOpenWide;
module.exports.default = LockOpenWide;
