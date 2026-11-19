'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path, Rect } = RNSvg;

const RestoreSquare = forwardRef(function RestoreSquare(
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
    createElement(Rect, {"x":"9.94946288292158","y":"5.998779299507078","width":"8","height":"8","rx":"1","ry":"1","key":"0"}),
    createElement(Path, {"d":"M13.94946288292158,16.998779299507078c0,.552284749828686-.447715250169495,1-1,1h-6c-.552284749830505,0-1-.447715250171314-1-1v-6c0-.552284749832324.447715250169495-1,1-1","key":"1"}),
    createElement(Rect, {"x":"1.94946288292158","y":"1.998779299507078","width":"20","height":"20","rx":"3","ry":"3","key":"2"})
  );
});

RestoreSquare.displayName = 'RestoreSquare';

module.exports = RestoreSquare;
module.exports.RestoreSquare = RestoreSquare;
module.exports.default = RestoreSquare;
