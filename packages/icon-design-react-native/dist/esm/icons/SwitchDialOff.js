import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Rect } from 'react-native-svg';

const SwitchDialOff = forwardRef(function SwitchDialOff(
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
    createElement(Circle, {"cx":"11.97473141363912","cy":"15.998779298524823","r":"6.00000000000216","key":"0"}),
    createElement(Line, {"x1":"7.732090726536626","y1":"11.756138611388451","x2":"11.267624632466323","y2":"15.291672517319967","key":"1"}),
    createElement(Rect, {"x":"1.974738027380369","y":"1.9987792977455","width":"4.000000025022189","height":"5.999999999998408","rx":"1.999998016072261","ry":"1.999998016072261","key":"2"}),
    createElement(Line, {"x1":"19.974731413605696","y1":"1.998779298537556","x2":"19.974731413605696","y2":"7.998779298537556","key":"3"})
  );
});

SwitchDialOff.displayName = 'SwitchDialOff';

export default SwitchDialOff;
export { SwitchDialOff };
