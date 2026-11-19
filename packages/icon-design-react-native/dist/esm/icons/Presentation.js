import { createElement, forwardRef } from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

const Presentation = forwardRef(function Presentation(
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
    createElement(Rect, {"x":"1.999999998490239","y":"1.998782814707738","width":"20","height":"20","rx":"2","ry":"2","key":"0"}),
    createElement(Line, {"x1":"1.999999998490239","y1":"6.9987828147041","x2":"21.999999998490239","y2":"6.9987828147041","key":"1"}),
    createElement(Line, {"x1":"1.999999998490239","y1":"16.9987828147041","x2":"21.999999998490239","y2":"16.9987828147041","key":"2"})
  );
});

Presentation.displayName = 'Presentation';

export default Presentation;
export { Presentation };
