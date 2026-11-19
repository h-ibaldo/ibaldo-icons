'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path, Rect } = RNSvg;

const BriefcaseFlapClasp = forwardRef(function BriefcaseFlapClasp(
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
    createElement(Rect, {"x":"10","y":"11.999999999998181","width":"4","height":"5","rx":"1","ry":"1","key":"2"}),
    createElement(Path, {"d":"M2.305541992189319,8.26190185546875l4.394409179679315,5.371337890619543c.18994140625.232116699220569.473999023442047.366760253909888.77392578125.366760253909888h2.526123046881366","key":"3"}),
    createElement(Path, {"d":"M14,13.999999999998181h2.526123046869543c.299926757819776,0,.583984375-.134643554689319.77392578125-.366760253909888l4.394409179691138-5.371337890619543","key":"4"})
  );
});

BriefcaseFlapClasp.displayName = 'BriefcaseFlapClasp';

module.exports = BriefcaseFlapClasp;
module.exports.BriefcaseFlapClasp = BriefcaseFlapClasp;
module.exports.default = BriefcaseFlapClasp;
