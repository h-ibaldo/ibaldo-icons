import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Rocket = forwardRef(function Rocket(
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
    createElement(Path, {"d":"M22 2L16.52 3.098C13.684 3.664 11.289 5.563 10.094 8.195L7 15L9 17L15.805 13.906C18.438 12.711 20.336 10.316 20.902 7.48Z","key":"0"}),
    createElement(Path, {"d":"M14.762 14.383L12 22L9 17","key":"1"}),
    createElement(Path, {"d":"M7 15L2 12L9.617 9.238","key":"2"}),
    createElement(Path, {"d":"M14 8C14 6.895 14.895 6 16 6C17.105 6 18 6.895 18 8C18 9.105 17.105 10 16 10C14.895 10 14 9.105 14 8Z","key":"3"}),
    createElement(Path, {"d":"M2 20.461L2 22L3.539 22C4.969 22 6.203 20.992 6.48 19.59L7 17L4.41 17.52C3.008 17.797 2 19.031 2 20.461Z","key":"4"})
  );
});

Rocket.displayName = 'Rocket';

export default Rocket;
export { Rocket };
