import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Pause = forwardRef(function Pause(
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
    createElement(Path, {"d":"M7 4L7 20","key":"0"}),
    createElement(Path, {"d":"M16 4L16 20","key":"1"})
  );
});

Pause.displayName = 'Pause';

export default Pause;
export { Pause };
