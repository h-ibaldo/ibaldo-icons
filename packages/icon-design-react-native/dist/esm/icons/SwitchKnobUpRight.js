import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const SwitchKnobUpRight = forwardRef(function SwitchKnobUpRight(
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
    createElement(Circle, {"cx":"11.99999997708619","cy":"11.997562035419833","r":"10","key":"0"}),
    createElement(Line, {"x1":"19.071067788796427","y1":"4.926494223393092","x2":"14.828427101776469","y2":"9.169134910611319","key":"1"})
  );
});

SwitchKnobUpRight.displayName = 'SwitchKnobUpRight';

export default SwitchKnobUpRight;
export { SwitchKnobUpRight };
