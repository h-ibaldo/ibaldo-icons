import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MedalOneHook = forwardRef(function MedalOneHook(
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
    createElement(Path, {"d":"M18 16C18 19.313 15.313 22 12 22C8.688 22 6 19.313 6 16C6 12.688 8.688 10 12 10C15.313 10 18 12.688 18 16Z","key":"0"}),
    createElement(Path, {"d":"M8 7L5 7C4.449 7 4 6.555 4 6L4 3C4 2.445 4.449 2 5 2L19 2C19.551 2 20 2.445 20 3L20 6C20 6.555 19.551 7 19 7L15 7L12 10","key":"1"}),
    createElement(Path, {"d":"M12 18L12 14L11 14","key":"2"})
  );
});

MedalOneHook.displayName = 'MedalOneHook';

export default MedalOneHook;
export { MedalOneHook };
