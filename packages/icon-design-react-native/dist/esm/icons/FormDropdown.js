import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Rect } from 'react-native-svg';

const FormDropdown = forwardRef(function FormDropdown(
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
    createElement(Rect, {"x":"1.974731444090139","y":"6.99999999557258","width":"20","height":"9.999999999996362","rx":"1","ry":"1","key":"0"}),
    createElement(Path, {"d":"M15.974731444090139,11.49999999557258l.792893218811514.792893218811514c.390524291749898.390524291753536,1.023689270620707.390524291753536,1.414213562389705,0l.792893218798781-.792893218811514","key":"1"}),
    createElement(Line, {"x1":"12.974731444090139","y1":"6.999999995576218","x2":"12.974731444090139","y2":"16.999999995568942","key":"2"})
  );
});

FormDropdown.displayName = 'FormDropdown';

export default FormDropdown;
export { FormDropdown };
