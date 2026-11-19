import { createElement, forwardRef } from 'react';
import Svg, { Polygon } from 'react-native-svg';

const Bolt = forwardRef(function Bolt(
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
    createElement(Polygon, {"points":"18.999999976489562 9.998779299956368 12.999999976489562 9.998779299956368 12.999999976489562 1.998779299956368 4.999999976489562 13.998779299956368 10.999999976489562 13.998779299956368 10.999999976489562 21.998840335112618 18.999999976489562 9.998779299956368","key":"0"})
  );
});

Bolt.displayName = 'Bolt';

export default Bolt;
export { Bolt };
