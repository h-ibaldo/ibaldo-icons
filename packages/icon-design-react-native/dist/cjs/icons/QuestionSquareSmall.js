'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { G, Line, Path, Rect } = RNSvg;

const QuestionSquareSmall = forwardRef(function QuestionSquareSmall(
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
    createElement(Rect, {"x":"4.000000000212822","y":"4.032754075495177","width":"16","height":"16","rx":"3","ry":"3","key":"0"}),
    createElement(G, {"key":"1"},
      createElement(Path, {"d":"M10.000000000224645,10.032754075946286v-.000002000000677c0-1.104568403690791.895429604908713-1.999997999999323,1.999998000000232-1.999997999999323h.000004000004992c1.104568395079696,0,1.999997999984771.895429604897799,1.999997999989318,1.999997999977495v.00000300001193c.000000000003638.640288606449758-.25435365854355,1.254352658561402-.707106074086369,1.707105074099672l-1.292893925908174,1.292893925910903","key":"0"}),
      createElement(Line, {"x1":"12.000000000224645","y1":"16.042754075946505","x2":"12.000000000224645","y2":"16.032754075946286","key":"1"}))
  );
});

QuestionSquareSmall.displayName = 'QuestionSquareSmall';

module.exports = QuestionSquareSmall;
module.exports.QuestionSquareSmall = QuestionSquareSmall;
module.exports.default = QuestionSquareSmall;
