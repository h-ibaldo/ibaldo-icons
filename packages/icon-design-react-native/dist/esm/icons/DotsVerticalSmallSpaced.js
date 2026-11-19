import { createElement, forwardRef } from 'react';
import Svg, { Line } from 'react-native-svg';

const DotsVerticalSmallSpaced = forwardRef(function DotsVerticalSmallSpaced(
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
    createElement(Line, {"x1":"12.035268553439892","y1":"2.999996485714291","x2":"12.025268553439673","y2":"2.999996485714291","key":"0"}),
    createElement(Line, {"x1":"12.035268553439892","y1":"11.999996485714291","x2":"12.025268553439673","y2":"11.999996485714291","key":"1"}),
    createElement(Line, {"x1":"12.035268553439892","y1":"20.999996485714291","x2":"12.025268553439673","y2":"20.999996485714291","key":"2"})
  );
});

DotsVerticalSmallSpaced.displayName = 'DotsVerticalSmallSpaced';

export default DotsVerticalSmallSpaced;
export { DotsVerticalSmallSpaced };
