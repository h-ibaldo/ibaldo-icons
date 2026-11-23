import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Brush = forwardRef(function Brush(
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
    createElement(Path, {"d":"M12 9L15 12","key":"0"}),
    createElement(Path, {"d":"M4 16C4 13.789 5.789 12 8 12C10.211 12 12 13.789 12 16C12 18.762 9.762 21 7 21L2 21C3.281 19.719 4 17.984 4 16.172Z","key":"1"}),
    createElement(Path, {"d":"M8.898 12.102L18 3C18.828 2.172 20.172 2.172 21 3C21.828 3.828 21.828 5.172 21 6L11.898 15.102","key":"2"})
  );
});

Brush.displayName = 'Brush';

export default Brush;
export { Brush };
