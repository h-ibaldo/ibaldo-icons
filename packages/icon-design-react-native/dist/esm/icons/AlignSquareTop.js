import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const AlignSquareTop = forwardRef(function AlignSquareTop(
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
    createElement(Path, {"d":"M16 10L16 14C16 15.105 15.105 16 14 16L10 16C8.895 16 8 15.105 8 14L8 10C8 8.895 8.895 8 10 8L14 8C15.105 8 16 8.895 16 10Z","key":"0"}),
    createElement(Path, {"d":"M19 2L5 2","key":"1"})
  );
});

AlignSquareTop.displayName = 'AlignSquareTop';

export default AlignSquareTop;
export { AlignSquareTop };
