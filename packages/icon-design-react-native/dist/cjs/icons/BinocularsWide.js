'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Path } = RNSvg;

const BinocularsWide = forwardRef(function BinocularsWide(
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
    createElement(Circle, {"cx":"6.999988017279975","cy":"16.936828613188482","r":"5","key":"0"}),
    createElement(Circle, {"cx":"16.999988017279975","cy":"16.936828613188482","r":"5","key":"1"}),
    createElement(Path, {"d":"M21.999988017279975,16.936828613188482V6.936828613188482c0-1.656860351560681-1.343139648439319-3-3-3,0-1.104553222650793-.895385742189319-2-2-2h-1c-1.104553222659888,0-2,.895446777349207-2,2h-4c0-1.104553222650793-.895385742189319-2-2-2h-1c-1.104553222659888,0-2,.895446777349207-2,2-1.656860351560681,0-3,1.343139648439319-3,3v10","key":"2"})
  );
});

BinocularsWide.displayName = 'BinocularsWide';

module.exports = BinocularsWide;
module.exports.BinocularsWide = BinocularsWide;
module.exports.default = BinocularsWide;
