import { createElement, forwardRef } from 'react';
import Svg, { Circle, Rect } from 'react-native-svg';

const ToggleOffInset = forwardRef(function ToggleOffInset(
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
    createElement(Rect, {"x":"2.000000211455358","y":"4.99999675957163","width":"19.999999999963393","height":"14.000000020118108","rx":"6.999993018822535","ry":"6.999993018822535","key":"0"}),
    createElement(Circle, {"cx":"8.999999977098923","cy":"11.999996563434252","r":"3","key":"1"})
  );
});

ToggleOffInset.displayName = 'ToggleOffInset';

export default ToggleOffInset;
export { ToggleOffInset };
