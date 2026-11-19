import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const StepBackCircle = forwardRef(function StepBackCircle(
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
    createElement(Path, {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z","key":"0"}),
    createElement(Path, {"d":"M12 9.137L12 14.863C12 15.715 11.012 16.176 10.359 15.633L6.922 12.77C6.441 12.367 6.441 11.633 6.922 11.23L10.359 8.367C11.012 7.824 12 8.289 12 9.137Z","key":"1"}),
    createElement(Path, {"d":"M16 8L16 16","key":"2"})
  );
});

StepBackCircle.displayName = 'StepBackCircle';

export default StepBackCircle;
export { StepBackCircle };
