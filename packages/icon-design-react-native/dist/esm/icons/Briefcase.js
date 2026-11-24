import { createElement, forwardRef } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const Briefcase = forwardRef(function Briefcase(
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
    createElement(Path, {"d":"M8,6.999999999998181v-2c0-1.104569499659192.895430500340808-2,2-2h4c1.104569499659192,0,2,.895430500340808,2,2v2","key":"1"})
  );
});

Briefcase.displayName = 'Briefcase';

export default Briefcase;
export { Briefcase };
