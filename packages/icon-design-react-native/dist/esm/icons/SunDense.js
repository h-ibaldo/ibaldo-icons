import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const SunDense = forwardRef(function SunDense(
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
    createElement(Circle, {"cx":"12","cy":"12.000000005924448","r":"4","key":"0"}),
    createElement(Line, {"x1":"12","y1":"20.000000005924448","x2":"12","y2":"22.000000005924448","key":"1"}),
    createElement(Line, {"x1":"12","y1":"2.000000005924448","x2":"12","y2":"4.000000005924448","key":"2"}),
    createElement(Line, {"x1":"18.928203230159852","y1":"16.000000006135451","x2":"20.660254037700724","y2":"17.000000006184564","key":"3"}),
    createElement(Line, {"x1":"3.339745962299276","y1":"7.000000005664333","x2":"5.071796769840148","y2":"8.000000005715265","key":"4"}),
    createElement(Line, {"x1":"18.928203230510917","y1":"8.00000000633554","x2":"20.66025403814092","y2":"7.000000006444679","key":"5"}),
    createElement(Line, {"x1":"3.339745961849985","y1":"17.000000005406037","x2":"5.071796769479988","y2":"16.000000005504262","key":"6"}),
    createElement(Line, {"x1":"15.999999999899956","y1":"18.92820323626438","x2":"16.999999999870852","y2":"20.660254043845271","key":"7"}),
    createElement(Line, {"x1":"7.000000000129148","y1":"3.339745968005445","x2":"8.000000000100044","y2":"5.071796775584517","key":"8"}),
    createElement(Line, {"x1":"20","y1":"12.000000006284608","x2":"22","y2":"12.000000006375558","key":"9"}),
    createElement(Line, {"x1":"2","y1":"12.000000005475158","x2":"4","y2":"12.000000005564289","key":"10"}),
    createElement(Line, {"x1":"16.000000000520231","y1":"5.071796775944676","x2":"17.000000000649379","y2":"3.339745968454736","key":"11"}),
    createElement(Line, {"x1":"6.999999999350621","y1":"20.66025404339598","x2":"7.999999999479769","y2":"18.92820323590422","key":"12"})
  );
});

SunDense.displayName = 'SunDense';

export default SunDense;
export { SunDense };
