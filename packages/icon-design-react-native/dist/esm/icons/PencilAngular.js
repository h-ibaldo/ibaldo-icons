import { createElement, forwardRef } from 'react';
import Svg, { Line, Polygon } from 'react-native-svg';

const PencilAngular = forwardRef(function PencilAngular(
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
    createElement(Polygon, {"points":"22 6.085786445528356 18 2.085786445528356 2 18.085786445528356 2.00000000036016 22.085786445168196 6.00000000036016 22.085786445168196 22 6.085786445528356","key":"0"}),
    createElement(Line, {"x1":"14.99999999963984","y1":"5.085786445168196","x2":"19","y2":"9.085786445528356","key":"1"})
  );
});

PencilAngular.displayName = 'PencilAngular';

export default PencilAngular;
export { PencilAngular };
