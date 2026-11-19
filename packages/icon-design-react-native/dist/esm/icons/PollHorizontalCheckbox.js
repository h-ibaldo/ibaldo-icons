import { createElement, forwardRef } from 'react';
import Svg, { Rect } from 'react-native-svg';

const PollHorizontalCheckbox = forwardRef(function PollHorizontalCheckbox(
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
    createElement(Rect, {"x":"9.999999999810825","y":"1.99999999981992","width":"6","height":"4","key":"0"}),
    createElement(Rect, {"x":"9.999999999810825","y":"9.99999999981992","width":"12","height":"4","key":"1"}),
    createElement(Rect, {"x":"9.999999999810825","y":"17.99999999981992","width":"9","height":"4","key":"2"}),
    createElement(Rect, {"x":"1.999999999810825","y":"1.99999999981992","width":"4","height":"4","key":"3"}),
    createElement(Rect, {"x":"1.999999999810825","y":"9.99999999981992","width":"4","height":"4","key":"4"}),
    createElement(Rect, {"x":"1.999999999810825","y":"17.99999999981992","width":"4","height":"4","key":"5"})
  );
});

PollHorizontalCheckbox.displayName = 'PollHorizontalCheckbox';

export default PollHorizontalCheckbox;
export { PollHorizontalCheckbox };
