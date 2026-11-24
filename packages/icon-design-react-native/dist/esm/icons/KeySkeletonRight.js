import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const KeySkeletonRight = forwardRef(function KeySkeletonRight(
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
    createElement(Circle, {"cx":"6.000019575949409","cy":"12.000015258789062","r":"4","key":"0"}),
    createElement(Line, {"x1":"22.000019575949409","y1":"12.000015258789062","x2":"10.000019575949409","y2":"12.000015258789062","key":"1"}),
    createElement(Line, {"x1":"20.000019575949409","y1":"16.000015258789062","x2":"20.000019575949409","y2":"12.000015258789062","key":"2"}),
    createElement(Line, {"x1":"16.000019575949409","y1":"16.000015258789062","x2":"16.000019575949409","y2":"12.000015258789062","key":"3"})
  );
});

KeySkeletonRight.displayName = 'KeySkeletonRight';

export default KeySkeletonRight;
export { KeySkeletonRight };
