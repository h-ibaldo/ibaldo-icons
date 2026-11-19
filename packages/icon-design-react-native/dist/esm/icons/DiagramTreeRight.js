import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Rect } from 'react-native-svg';

const DiagramTreeRight = forwardRef(function DiagramTreeRight(
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
    createElement(Rect, {"x":"1.949462885142566","y":"10.000000000480213","width":"6","height":"4","key":"0"}),
    createElement(Rect, {"x":"15.949462885142566","y":"4.000000000480213","width":"6","height":"4","key":"1"}),
    createElement(Rect, {"x":"15.949462885142566","y":"16.000000000480213","width":"6","height":"4","key":"2"}),
    createElement(Line, {"x1":"10.949462885142566","y1":"12.000000000480213","x2":"7.949462885142566","y2":"12.000000000480213","key":"3"}),
    createElement(Path, {"d":"M15.949462885142566,6.000000000480213h-2.279240779942484c-.430430408074244,0-.812569251680543.27543009486908-.948683298051037.683772233980562l-1.772075922006479,5.316227766019438","key":"4"}),
    createElement(Path, {"d":"M15.949462885142566,18.000000000480213h-2.279240779942484c-.430430408074244,0-.812569251680543-.27543009486908-.948683298051037-.683772233980562l-1.772075922006479-5.316227766019438","key":"5"})
  );
});

DiagramTreeRight.displayName = 'DiagramTreeRight';

export default DiagramTreeRight;
export { DiagramTreeRight };
