import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const EjectSquare = forwardRef(function EjectSquare(
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
    createElement(Path, {"d":"M17 17L7 17","key":"0"}),
    createElement(Path, {"d":"M15.836 13.055L8.164 13.055C7.313 13.055 6.848 12.059 7.402 11.41L11.238 6.895C11.637 6.426 12.363 6.426 12.762 6.895L16.598 11.41C17.152 12.059 16.691 13.055 15.836 13.055Z","key":"1"}),
    createElement(Path, {"d":"M2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19Z","key":"2"})
  );
});

EjectSquare.displayName = 'EjectSquare';

export default EjectSquare;
export { EjectSquare };
