import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const FormRadioLong = forwardRef(function FormRadioLong(
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
    createElement(Circle, {"cx":"5.999999991062396","cy":"12","r":"4","key":"0"}),
    createElement(Line, {"x1":"14","y1":"12","x2":"22","y2":"12","key":"1"})
  );
});

FormRadioLong.displayName = 'FormRadioLong';

export default FormRadioLong;
export { FormRadioLong };
