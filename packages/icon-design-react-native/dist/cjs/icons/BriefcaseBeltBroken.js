'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Rect } = RNSvg;

const BriefcaseBeltBroken = forwardRef(function BriefcaseBeltBroken(
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
    createElement(Path, {"d":"M7.999998360470272,15.999999999998181h-3.58476890277052c-1.333894396830146,0-2.415229457699752-1.081335060869606-2.415229457699752-2.415229457699752","key":"1"}),
    createElement(Path, {"d":"M22,13.584770542298429c0,1.333894396830146-1.081335060860511,2.415229457699752-2.415229457699752,2.415229457699752h-3.584770073650361","key":"2"}),
    createElement(Path, {"d":"M8,6.999999999998181v-2c0-1.104569499659192.895430500340808-2,2-2h4c1.104569499659192,0,2,.895430500340808,2,2v2","key":"3"}),
    createElement(Line, {"x1":"12","y1":"14.999999999998181","x2":"12","y2":"16.999999999998181","key":"4"})
  );
});

BriefcaseBeltBroken.displayName = 'BriefcaseBeltBroken';

module.exports = BriefcaseBeltBroken;
module.exports.BriefcaseBeltBroken = BriefcaseBeltBroken;
module.exports.default = BriefcaseBeltBroken;
