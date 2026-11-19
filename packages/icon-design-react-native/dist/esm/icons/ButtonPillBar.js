import { createElement, forwardRef } from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

const ButtonPillBar = forwardRef(function ButtonPillBar(
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
    createElement(Rect, {"x":"1.999999995185732","y":"6.999999997010121","width":"19.999999999999943","height":"10.000000007293295","rx":"4.99999501106799","ry":"4.99999501106799","key":"0"}),
    createElement(Line, {"x1":"6.999999990797733","y1":"11.000000000448381","x2":"16.999999990797733","y2":"11.000000000448381","key":"1"})
  );
});

ButtonPillBar.displayName = 'ButtonPillBar';

export default ButtonPillBar;
export { ButtonPillBar };
