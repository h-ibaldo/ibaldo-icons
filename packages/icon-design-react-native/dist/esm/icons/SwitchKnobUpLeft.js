import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const SwitchKnobUpLeft = forwardRef(function SwitchKnobUpLeft(
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
    createElement(Line, {"x1":"4.928932165386868","y1":"4.92649422339673","x2":"9.171572852405006","y2":"9.169134910611319","key":"1"})
  );
});

SwitchKnobUpLeft.displayName = 'SwitchKnobUpLeft';

export default SwitchKnobUpLeft;
export { SwitchKnobUpLeft };
