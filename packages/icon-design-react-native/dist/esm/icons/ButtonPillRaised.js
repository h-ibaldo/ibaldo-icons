import { createElement, forwardRef } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const ButtonPillRaised = forwardRef(function ButtonPillRaised(
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
    createElement(Rect, {"x":"1.999999995185789","y":"6.999999996999868","width":"20.000000000000057","height":"10.000000007293337","rx":"4.999995005743859","ry":"4.999995005743859","key":"0"}),
    createElement(Path, {"d":"M3.379455557203983,8.567504883259971c-.23431396484375.427429199219659-.37945556640625.910705566407159-.37945556640625,1.432495117188409,0,1.656860351561591,1.3431396484375,3,3,3h12c1.6568603515625,0,3-1.343139648438409,3-3,0-.52178955078125-.1451416015625-1.00506591796875-.37945556640625-1.432495117188409","key":"1"})
  );
});

ButtonPillRaised.displayName = 'ButtonPillRaised';

export default ButtonPillRaised;
export { ButtonPillRaised };
