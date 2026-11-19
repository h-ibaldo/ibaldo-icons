import { createElement, forwardRef } from 'react';
import Svg, { Polyline } from 'react-native-svg';

const Check = forwardRef(function Check(
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
    createElement(Polyline, {"points":"4.974731440080177 12.000000003874447 9.974731440080177 17.000000003874447 18.974731440080177 7.000000003874447","key":"0"})
  );
});

Check.displayName = 'Check';

export default Check;
export { Check };
