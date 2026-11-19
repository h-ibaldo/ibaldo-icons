import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const StepBackSquare = forwardRef(function StepBackSquare(
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
    createElement(Path, {"d":"M17 7L17 17","key":"0"}),
    createElement(Path, {"d":"M13.055 8.164L13.055 15.836C13.055 16.688 12.059 17.152 11.41 16.598L6.895 12.762C6.426 12.363 6.426 11.637 6.895 11.238L11.41 7.402C12.059 6.848 13.055 7.309 13.055 8.164Z","key":"1"}),
    createElement(Path, {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z","key":"2"})
  );
});

StepBackSquare.displayName = 'StepBackSquare';

export default StepBackSquare;
export { StepBackSquare };
