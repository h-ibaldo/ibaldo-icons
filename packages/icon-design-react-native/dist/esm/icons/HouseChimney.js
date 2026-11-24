import { createElement, forwardRef } from 'react';
import Svg, { Line, Polygon } from 'react-native-svg';

const HouseChimney = forwardRef(function HouseChimney(
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
    createElement(Polygon, {"points":"18.999999999239662 21.000000000842192 4.999999999239662 21.000000000842192 4.999999999239662 13.000000000842192 1.999999999239662 13.000000000842192 11.999999999239662 3.000000000842192 21.999999999239662 13.000000000842192 18.999999999239662 13.000000000842192 18.999999999239662 21.000000000842192","key":"0"}),
    createElement(Line, {"x1":"17.999999999239662","y1":"4.000000000842192","x2":"17.999999999239662","y2":"9.000000000842192","key":"1"})
  );
});

HouseChimney.displayName = 'HouseChimney';

export default HouseChimney;
export { HouseChimney };
