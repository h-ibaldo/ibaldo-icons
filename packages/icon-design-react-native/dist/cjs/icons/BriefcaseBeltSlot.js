'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Rect } = RNSvg;

const BriefcaseBeltSlot = forwardRef(function BriefcaseBeltSlot(
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
    createElement(Path, {"d":"M22,13.584770542298429c0,1.333894396830146-1.081335060860511,2.415229457699752-2.415229457699752,2.415229457699752H4.415229457699752c-1.333894396830146,0-2.415229457699752-1.081335060869606-2.415229457699752-2.415229457699752","key":"1"}),
    createElement(Path, {"d":"M9,2.999999999998181h6c.551915024494001,0,1,.448084975506,1,1v3h-8v-3c0-.551915024494.448084975505999-1,1-1Z","key":"2"}),
    createElement(Line, {"x1":"11","y1":"11.999999999998181","x2":"13","y2":"11.999999999998181","key":"3"})
  );
});

BriefcaseBeltSlot.displayName = 'BriefcaseBeltSlot';

module.exports = BriefcaseBeltSlot;
module.exports.BriefcaseBeltSlot = BriefcaseBeltSlot;
module.exports.default = BriefcaseBeltSlot;
