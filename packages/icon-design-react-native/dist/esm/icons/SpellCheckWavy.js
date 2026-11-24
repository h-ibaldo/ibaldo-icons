import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SpellCheckWavy = forwardRef(function SpellCheckWavy(
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
    createElement(Path, {"d":"M5 17L10.605 3.918C10.844 3.363 11.395 3 12 3C12.605 3 13.156 3.363 13.395 3.918L19 17","key":"0"}),
    createElement(Path, {"d":"M3 21C3.551 20.449 4.449 20.449 5 21C5.551 21.551 6.449 21.551 7 21C7.551 20.449 8.449 20.449 9 21C9.551 21.551 10.449 21.551 11 21C11.551 20.449 12.449 20.449 13 21C13.551 21.551 14.449 21.551 15 21C15.551 20.449 16.449 20.449 17 21C17.551 21.551 18.449 21.551 19 21C19.551 20.449 20.449 20.449 21 21","key":"1"}),
    createElement(Path, {"d":"M7.145 12L16.855 12","key":"2"})
  );
});

SpellCheckWavy.displayName = 'SpellCheckWavy';

export default SpellCheckWavy;
export { SpellCheckWavy };
