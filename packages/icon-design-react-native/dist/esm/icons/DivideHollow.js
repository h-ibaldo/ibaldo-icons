import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const DivideHollow = forwardRef(function DivideHollow(
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
    createElement(Path, {"d":"M14 5C14 6.105 13.105 7 12 7C10.895 7 10 6.105 10 5C10 3.895 10.895 3 12 3C13.105 3 14 3.895 14 5Z","key":"0"}),
    createElement(Path, {"d":"M14 19C14 20.105 13.105 21 12 21C10.895 21 10 20.105 10 19C10 17.895 10.895 17 12 17C13.105 17 14 17.895 14 19Z","key":"1"}),
    createElement(Path, {"d":"M3 12L21 12","key":"2"})
  );
});

DivideHollow.displayName = 'DivideHollow';

export default DivideHollow;
export { DivideHollow };
