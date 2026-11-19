import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const FormRadioDot = forwardRef(function FormRadioDot(
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
    createElement(Line, {"x1":"18.00000000376167","y1":"11.999999998985004","x2":"22.00000000376167","y2":"11.999999998985004","key":"0"}),
    createElement(Circle, {"cx":"8.00000000376167","cy":"11.999999998985004","r":"6","key":"1"}),
    createElement(Circle, {"cx":"8.00000000376167","cy":"11.999999998984094","r":".999999999999545","key":"2"})
  );
});

FormRadioDot.displayName = 'FormRadioDot';

export default FormRadioDot;
export { FormRadioDot };
