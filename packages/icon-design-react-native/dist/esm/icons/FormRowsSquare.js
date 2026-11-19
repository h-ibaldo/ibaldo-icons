import { createElement, forwardRef } from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

const FormRowsSquare = forwardRef(function FormRowsSquare(
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
    createElement(Rect, {"x":"10.000000005000402","y":"6.000000003886271","width":"9","height":"4","rx":"1","ry":"1","key":"0"}),
    createElement(Rect, {"x":"2.000000005000402","y":"2.000000003886271","width":"20","height":"19.999999999997272","rx":"1","ry":"1","key":"1"}),
    createElement(Line, {"x1":"5.000000005000402","y1":"8.000000003886271","x2":"7.000000005000402","y2":"8.000000003886271","key":"2"}),
    createElement(Rect, {"x":"10.000000005000402","y":"14.000000003886271","width":"9","height":"4","rx":"1","ry":"1","key":"3"}),
    createElement(Line, {"x1":"5.000000005000402","y1":"16.000000003886271","x2":"7.000000005000402","y2":"16.000000003886271","key":"4"})
  );
});

FormRowsSquare.displayName = 'FormRowsSquare';

export default FormRowsSquare;
export { FormRowsSquare };
