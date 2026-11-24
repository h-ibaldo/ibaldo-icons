import { createElement, forwardRef } from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

const FormRows = forwardRef(function FormRows(
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
    createElement(Rect, {"x":"9.000000005000402","y":"2.000000003886271","width":"13","height":"4","rx":"1","ry":"1","key":"0"}),
    createElement(Line, {"x1":"2.000000005000402","y1":"4.000000003886271","x2":"6.000000005000402","y2":"4.000000003886271","key":"1"}),
    createElement(Rect, {"x":"9.000000005000402","y":"10.000000003886271","width":"13","height":"4","rx":"1","ry":"1","key":"2"}),
    createElement(Rect, {"x":"9.000000005000402","y":"18.000000003886271","width":"13","height":"4","rx":"1","ry":"1","key":"3"}),
    createElement(Line, {"x1":"2.000000005000402","y1":"12.000000003886271","x2":"6.000000005000402","y2":"12.000000003886271","key":"4"}),
    createElement(Line, {"x1":"2.000000005000402","y1":"20.000000003886271","x2":"6.000000005000402","y2":"20.000000003886271","key":"5"})
  );
});

FormRows.displayName = 'FormRows';

export default FormRows;
export { FormRows };
