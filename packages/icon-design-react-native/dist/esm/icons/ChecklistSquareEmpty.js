import { createElement, forwardRef } from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

const ChecklistSquareEmpty = forwardRef(function ChecklistSquareEmpty(
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
    createElement(Line, {"x1":"11.000000000220098","y1":"4.032754075946286","x2":"22.000000000220098","y2":"4.032754075946286","key":"0"}),
    createElement(Line, {"x1":"11.000000000220098","y1":"12.032754075946286","x2":"22.000000000220098","y2":"12.032754075946286","key":"1"}),
    createElement(Line, {"x1":"11.000000000220098","y1":"20.032754075946286","x2":"22.000000000220098","y2":"20.032754075946286","key":"2"}),
    createElement(Rect, {"x":"2.000000000220098","y":"10.032754075946286","width":"4","height":"4","key":"3"}),
    createElement(Rect, {"x":"2.000000000220098","y":"2.032754075946286","width":"4","height":"4","key":"4"}),
    createElement(Rect, {"x":"2.000000000220098","y":"18.032754075946286","width":"4","height":"4","key":"5"})
  );
});

ChecklistSquareEmpty.displayName = 'ChecklistSquareEmpty';

export default ChecklistSquareEmpty;
export { ChecklistSquareEmpty };
