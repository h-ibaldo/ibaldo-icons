import { createElement, forwardRef } from 'react';
import Svg, { G, Line, Path, Rect } from 'react-native-svg';

const QuestionSquareStackOverlap = forwardRef(function QuestionSquareStackOverlap(
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
    createElement(Rect, {"x":"3.000000000224645","y":"2.032754075946286","width":"14","height":"16","rx":"2","ry":"2","key":"0"}),
    createElement(Path, {"d":"M7.000000000224645,18.032754075946286v2c0,1.104569499661011.895430500338989,2,2,2h10c1.104569499661011,0,2-.895430500338989,2-2v-12c0-1.104569499661011-.895430500338989-2-2-2h-2","key":"1"}),
    createElement(G, {"key":"2"},
      createElement(Path, {"d":"M8.000000000224645,8.032754075946286v-.000002000000677c0-1.104568403690791.895429604908713-1.999997999999323,1.999998000000232-1.999997999999323h.000004000004992c1.104568395079696,0,1.99999799998659.895429604897799,1.999997999990228,1.999997999977495v.00000300001193c.000000000002728.640288606449758-.25435365854446,1.254352658561402-.707106074086369,1.707105074099672l-1.292893925909084,1.292893925910903","key":"0"}),
      createElement(Line, {"x1":"10.000000000224645","y1":"14.042754075946505","x2":"10.000000000224645","y2":"14.032754075946286","key":"1"}))
  );
});

QuestionSquareStackOverlap.displayName = 'QuestionSquareStackOverlap';

export default QuestionSquareStackOverlap;
export { QuestionSquareStackOverlap };
