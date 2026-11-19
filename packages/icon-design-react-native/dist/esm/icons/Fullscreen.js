import { createElement, forwardRef } from 'react';
import Svg, { Polyline } from 'react-native-svg';

const Fullscreen = forwardRef(function Fullscreen(
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
    createElement(Polyline, {"points":"1.949462882913394 8.998779299525268 1.949462882913394 1.998779299525268 8.949462882913394 1.998779299525268","key":"0"}),
    createElement(Polyline, {"points":"21.949462883221713 14.998781724209039 21.949462883221713 21.998778260107429 14.949466347312409 21.998778260107429","key":"1"})
  );
});

Fullscreen.displayName = 'Fullscreen';

export default Fullscreen;
export { Fullscreen };
