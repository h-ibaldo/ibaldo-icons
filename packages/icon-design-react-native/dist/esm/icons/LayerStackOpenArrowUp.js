import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const LayerStackOpenArrowUp = forwardRef(function LayerStackOpenArrowUp(
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
    createElement(Path, {"d":"M12 12L2 7L12 2L22 7Z","key":"0"}),
    createElement(Path, {"d":"M7 9.5L2 12L12 17","key":"1"}),
    createElement(Path, {"d":"M22 12L17 9.5","key":"2"}),
    createElement(Path, {"d":"M7 14.5L2 17L12 22","key":"3"}),
    createElement(Path, {"d":"M16 18L19 15L22 18","key":"4"}),
    createElement(Path, {"d":"M19 15L19 22","key":"5"})
  );
});

LayerStackOpenArrowUp.displayName = 'LayerStackOpenArrowUp';

export default LayerStackOpenArrowUp;
export { LayerStackOpenArrowUp };
