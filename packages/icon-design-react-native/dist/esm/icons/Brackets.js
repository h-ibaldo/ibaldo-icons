import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Brackets = forwardRef(function Brackets(
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
    createElement(Path, {"d":"M8 8L4 12L8 16","key":"0"}),
    createElement(Path, {"d":"M16 8L20 12L16 16","key":"1"})
  );
});

Brackets.displayName = 'Brackets';

export default Brackets;
export { Brackets };
