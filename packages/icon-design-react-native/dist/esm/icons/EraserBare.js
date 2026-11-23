import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const EraserBare = forwardRef(function EraserBare(
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
    createElement(Path, {"d":"M8 21L21 21","key":"0"}),
    createElement(Path, {"d":"M8 21L3.414 16.414C2.633 15.633 2.633 14.367 3.414 13.586L12.586 4.414C13.367 3.633 14.633 3.633 15.414 4.414L19.586 8.586C20.367 9.367 20.367 10.633 19.586 11.414L10 21","key":"1"})
  );
});

EraserBare.displayName = 'EraserBare';

export default EraserBare;
export { EraserBare };
