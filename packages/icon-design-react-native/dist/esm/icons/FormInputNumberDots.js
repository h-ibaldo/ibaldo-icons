import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline, Rect } from 'react-native-svg';

const FormInputNumberDots = forwardRef(function FormInputNumberDots(
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
    createElement(Rect, {"x":"2","y":"6","width":"20","height":"12.000000000003638","rx":"2","ry":"2","key":"0"}),
    createElement(Polyline, {"points":"6 10 7 10 7 14","key":"1"}),
    createElement(Line, {"x1":"11","y1":"13.989999999999782","x2":"11","y2":"14","key":"2"}),
    createElement(Line, {"x1":"15","y1":"13.989999999999782","x2":"15","y2":"14","key":"3"})
  );
});

FormInputNumberDots.displayName = 'FormInputNumberDots';

export default FormInputNumberDots;
export { FormInputNumberDots };
