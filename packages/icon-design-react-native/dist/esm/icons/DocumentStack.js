import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Rect } from 'react-native-svg';

const DocumentStack = forwardRef(function DocumentStack(
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
    createElement(Rect, {"x":"7.025268548599342","y":"5.998779303362426","width":"15","height":"16","rx":"1","ry":"1","key":"0"}),
    createElement(Path, {"d":"M16.025268548599342,5.998779303362426v-3c0-.552284749829596-.447715250169495-1-1-1H3.025268548599342c-.552284749830505,0-1,.447715250170404-1,1v14c0,.552284749831415.447715250169495,1,1,1h4","key":"1"}),
    createElement(Line, {"x1":"11.025268548599342","y1":"9.998779303362426","x2":"18.025268548599342","y2":"9.998779303362426","key":"2"}),
    createElement(Line, {"x1":"11.025268548599342","y1":"13.998779303362426","x2":"18.025268548599342","y2":"13.998779303362426","key":"3"}),
    createElement(Line, {"x1":"11.025268548599342","y1":"17.998779303362426","x2":"18.025268548599342","y2":"17.998779303362426","key":"4"})
  );
});

DocumentStack.displayName = 'DocumentStack';

export default DocumentStack;
export { DocumentStack };
