'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Rect } = RNSvg;

const BriefcaseBeltClasps = forwardRef(function BriefcaseBeltClasps(
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
    createElement(Rect, {"x":"2","y":"6.999999999998181","width":"20","height":"14","rx":"1","ry":"1","key":"0"}),
    createElement(Path, {"d":"M8,6.999999999998181v-3c0-.552284749830505.447715250169495-1,1-1h6c.552284749830505,0,1,.447715250169495,1,1v3","key":"1"}),
    createElement(Line, {"x1":"9","y1":"12.999999999998181","x2":"9","y2":"16.999999999998181","key":"2"}),
    createElement(Line, {"x1":"15","y1":"12.999999999998181","x2":"15","y2":"16.999999999998181","key":"3"}),
    createElement(Line, {"x1":"2","y1":"14.999999999998181","x2":"22","y2":"14.999999999998181","key":"4"})
  );
});

BriefcaseBeltClasps.displayName = 'BriefcaseBeltClasps';

module.exports = BriefcaseBeltClasps;
module.exports.BriefcaseBeltClasps = BriefcaseBeltClasps;
module.exports.default = BriefcaseBeltClasps;
