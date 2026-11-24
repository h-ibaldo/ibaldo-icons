import { createElement, forwardRef } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const SunFaceted = forwardRef(function SunFaceted(
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
    createElement(Path, {"d":"M19.716796875,15.196411132808862l2.283203125-3.196411132810681-2.283203125-3.196350097659888-.645751953130457-3.874755859369543-3.874755859369543-.645751953130457-3.1962890625-2.283142089840112-3.196411132810681,2.283142089840112-3.874633789069776.645751953130457-.645751953119543,3.87469482421875-2.283203125,3.196411132810681,2.283203125,3.196472167970569.645751953119543,3.874572753898974,3.87451171875.645751953130457,3.196533203130457,2.283203125,3.196411132810681-2.283142089840112,3.874633789058862-.645812988290345.645751953130457-3.874633789058862Z","key":"0"}),
    createElement(Circle, {"cx":"12","cy":"11.999999999998181","r":"5","key":"1"})
  );
});

SunFaceted.displayName = 'SunFaceted';

export default SunFaceted;
export { SunFaceted };
