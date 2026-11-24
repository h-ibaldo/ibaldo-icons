'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Rect } = RNSvg;

const BriefcaseKeyhole = forwardRef(function BriefcaseKeyhole(
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
    createElement(Line, {"x1":"12","y1":"13.999999999998181","x2":"12","y2":"14.999999999998181","key":"1"}),
    createElement(Path, {"d":"M8,6.999999999998181v-3c0-.552284749830505.447715250168585-1,1-1h6c.552284749829596,0,1,.447715250169495,1,1v3","key":"2"})
  );
});

BriefcaseKeyhole.displayName = 'BriefcaseKeyhole';

module.exports = BriefcaseKeyhole;
module.exports.BriefcaseKeyhole = BriefcaseKeyhole;
module.exports.default = BriefcaseKeyhole;
