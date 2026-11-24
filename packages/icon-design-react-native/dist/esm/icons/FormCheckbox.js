import { createElement, forwardRef } from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

const FormCheckbox = forwardRef(function FormCheckbox(
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
    createElement(Line, {"x1":"15.999999978659616","y1":"11.99877586740331","x2":"21.999999978659616","y2":"11.99877586740331","key":"0"}),
    createElement(Rect, {"x":"1.999999978659616","y":"6.99877586740331","width":"10","height":"10","rx":"1","ry":"1","key":"1"})
  );
});

FormCheckbox.displayName = 'FormCheckbox';

export default FormCheckbox;
export { FormCheckbox };
