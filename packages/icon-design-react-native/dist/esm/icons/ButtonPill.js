import { createElement, forwardRef } from 'react';
import Svg, { Rect } from 'react-native-svg';

const ButtonPill = forwardRef(function ButtonPill(
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
    createElement(Rect, {"x":"1.999999995180133","y":"6.999999996999868","width":"20","height":"10.000000007293337","rx":"4.999995005749084","ry":"4.999995005749084","key":"0"})
  );
});

ButtonPill.displayName = 'ButtonPill';

export default ButtonPill;
export { ButtonPill };
