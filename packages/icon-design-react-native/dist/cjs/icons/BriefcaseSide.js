'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Rect } = RNSvg;

const BriefcaseSide = forwardRef(function BriefcaseSide(
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
    createElement(Rect, {"x":"2","y":"6.999999999998181","width":"20","height":"14","rx":"2","ry":"2","key":"0"}),
    createElement(Path, {"d":"M8,20.999999999998181c-1.104569499661011,0-2-.895430500340808-2-2v-10.000001999998858c0-1.10456839509061-.895429611206055-1.999998000001142-1.999997999999323-1.999998000001142h-.000002000000677","key":"1"}),
    createElement(Path, {"d":"M10,6.999999999998181v-3c0-.552284749830505.447715250168585-1,1-1h4c.552284749829596,0,1,.447715250169495,1,1v3","key":"2"}),
    createElement(Line, {"x1":"6","y1":"15.999999999998181","x2":"22","y2":"15.999999999998181","key":"3"})
  );
});

BriefcaseSide.displayName = 'BriefcaseSide';

module.exports = BriefcaseSide;
module.exports.BriefcaseSide = BriefcaseSide;
module.exports.default = BriefcaseSide;
