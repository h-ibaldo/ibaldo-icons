'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path, Rect } = RNSvg;

const Restore = forwardRef(function Restore(
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
    createElement(Path, {"d":"M14.949462887261689,18.998779299481612v2.000000000003638c0,.552284749828686-.447715250169495,1-1,1H2.949462887261689c-.552284749830505,0-1-.447715250171314-1-1v-11c0-.552284749832324.447715250169495-1,1-1h2","key":"0"}),
    createElement(Rect, {"x":"8.949462887261689","y":"1.99877929948525","width":"13","height":"13","rx":"1","ry":"1","key":"1"})
  );
});

Restore.displayName = 'Restore';

module.exports = Restore;
module.exports.Restore = Restore;
module.exports.default = Restore;
