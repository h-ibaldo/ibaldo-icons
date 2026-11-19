import { createElement, forwardRef } from 'react';
import Svg, { Polyline, Rect } from 'react-native-svg';

const ButtonScribble = forwardRef(function ButtonScribble(
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
    createElement(Rect, {"x":"1.999999990797733","y":"7.000000000448381","width":"20","height":"10","rx":"2","ry":"2","key":"0"}),
    createElement(Polyline, {"points":"6.999999990797733 13.000000000448381 8.999999990797733 11.000000000448381 10.999999990797733 13.000000000448381 12.999999990797733 11.000000000448381 14.999999990797733 13.000000000448381 16.999999990797733 11.000000000448381","key":"1"})
  );
});

ButtonScribble.displayName = 'ButtonScribble';

export default ButtonScribble;
export { ButtonScribble };
