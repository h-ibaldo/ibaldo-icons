import { createElement, forwardRef } from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

const NotebookInfo = forwardRef(function NotebookInfo(
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
    createElement(Rect, {"x":"5.025268548599342","y":"2.998779303362426","width":"15","height":"18","rx":"2","ry":"2","key":"0"}),
    createElement(Line, {"x1":"3.025268548599342","y1":"6.998779303362426","x2":"7.025268548599342","y2":"6.998779303362426","key":"1"}),
    createElement(Line, {"x1":"3.025268548599342","y1":"11.998779303362426","x2":"7.025268548599342","y2":"11.998779303362426","key":"2"}),
    createElement(Line, {"x1":"3.025268548599342","y1":"16.998779303362426","x2":"7.025268548599342","y2":"16.998779303362426","key":"3"}),
    createElement(Line, {"x1":"13.025268548599342","y1":"8.988779303362207","x2":"13.025268548599342","y2":"8.998779303362426","key":"4"}),
    createElement(Line, {"x1":"13.025268548599342","y1":"14.998779303362426","x2":"13.025268548599342","y2":"11.998779303362426","key":"5"})
  );
});

NotebookInfo.displayName = 'NotebookInfo';

export default NotebookInfo;
export { NotebookInfo };
