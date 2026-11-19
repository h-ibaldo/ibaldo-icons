import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Rect } from 'react-native-svg';

const WindowKeyHorizontal = forwardRef(function WindowKeyHorizontal(
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
    createElement(Rect, {"x":"17.000000007920988","y":"14.000000000235779","width":"5.000000028648685","height":"7.99999999999882","rx":"2.499997512237252","ry":"2.499997512237252","key":"0"}),
    createElement(Line, {"x1":"8.000000000184627","y1":"18.000000000448381","x2":"17.000000000184627","y2":"18.000000000448381","key":"1"}),
    createElement(Line, {"x1":"8.000000000184627","y1":"21.000000000448381","x2":"8.000000000184627","y2":"18.000000000448381","key":"2"}),
    createElement(Line, {"x1":"11.000000000184627","y1":"21.000000000448381","x2":"11.000000000184627","y2":"18.000000000448381","key":"3"}),
    createElement(Path, {"d":"M22.000000000184627,11.000000000448381v-7c0-1.10456949966192-.895430500338989-2-2-2H4.000000000184627c-1.10456949966192,0-2,.89543050033808-2,2v16c0,1.10456949966283.89543050033808,2,2,2","key":"4"}),
    createElement(Line, {"x1":"2.000000000184627","y1":"8.000000000448381","x2":"22.000000000184627","y2":"8.000000000448381","key":"5"}),
    createElement(Line, {"x1":"5.010000000184846","y1":"5.000000000448381","x2":"5.000000000184627","y2":"5.000000000448381","key":"6"}),
    createElement(Line, {"x1":"8.010000000184846","y1":"5.000000000448381","x2":"8.000000000184627","y2":"5.000000000448381","key":"7"}),
    createElement(Line, {"x1":"11.010000000184846","y1":"5.000000000448381","x2":"11.000000000184627","y2":"5.000000000448381","key":"8"})
  );
});

WindowKeyHorizontal.displayName = 'WindowKeyHorizontal';

export default WindowKeyHorizontal;
export { WindowKeyHorizontal };
