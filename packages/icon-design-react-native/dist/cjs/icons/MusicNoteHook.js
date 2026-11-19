'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Ellipse, Path } = RNSvg;

const MusicNoteHook = forwardRef(function MusicNoteHook(
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
    createElement(Ellipse, {"cx":"8","cy":"18.499999999998181","rx":"4","ry":"3.5","key":"0"}),
    createElement(Path, {"d":"M20,6.999999999998181v-.000004999999874c0-2.761420986889789-2.238574012269964-4.999995000000126-4.999995000000126-4.999995000000126h-3.000004999999874v16","key":"1"})
  );
});

MusicNoteHook.displayName = 'MusicNoteHook';

module.exports = MusicNoteHook;
module.exports.MusicNoteHook = MusicNoteHook;
module.exports.default = MusicNoteHook;
