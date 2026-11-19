import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Volume = forwardRef(function Volume(
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
    createElement(Path, {"d":"M5 9L5 15C5 15.555 5.449 16 6 16L10 16L17.445 20.965C18.109 21.406 19 20.93 19 20.133L19 3.867C19 3.07 18.109 2.594 17.445 3.035L10 8L6 8C5.449 8 5 8.445 5 9Z","key":"0"})
  );
});

Volume.displayName = 'Volume';

export default Volume;
export { Volume };
