import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Paintbrush = forwardRef(function Paintbrush(
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
    createElement(Path, {"d":"M8 9L2 15L9 22L15 16","key":"0"}),
    createElement(Path, {"d":"M19 2C20.656 2 22 3.344 22 5C22 6.656 20.656 8 19 8L16 11L19 14L16 17L7 8L10 5L13 8L16 5C16 3.344 17.344 2 19 2Z","key":"1"}),
    createElement(Path, {"d":"M4 13L12 19","key":"2"})
  );
});

Paintbrush.displayName = 'Paintbrush';

export default Paintbrush;
export { Paintbrush };
