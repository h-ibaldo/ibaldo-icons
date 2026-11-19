import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FormControlsPlus = forwardRef(function FormControlsPlus(
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
    createElement(Path, {"d":"M16.5 15L7.5 15C5.566 15 4 16.566 4 18.5C4 20.434 5.566 22 7.5 22L16.5 22C18.434 22 20 20.434 20 18.5C20 16.566 18.434 15 16.5 15Z","key":"0"}),
    createElement(Path, {"d":"M11 2L2 2L2 11L11 11Z","key":"1"}),
    createElement(Path, {"d":"M6.5 8.25L6.5 4.75","key":"2"}),
    createElement(Path, {"d":"M4.75 6.5L8.25 6.5","key":"3"}),
    createElement(Path, {"d":"M8 22C9.934 22 11.5 20.434 11.5 18.5C11.5 16.566 9.934 15 8 15","key":"4"}),
    createElement(Path, {"d":"M22 6.25C22 8.598 20.098 10.5 17.75 10.5C15.402 10.5 13.5 8.598 13.5 6.25C13.5 3.902 15.402 2 17.75 2C20.098 2 22 3.902 22 6.25Z","key":"5"}),
    createElement(Path, {"d":"M18.25 6.25C18.25 6.527 18.027 6.75 17.75 6.75C17.473 6.75 17.25 6.527 17.25 6.25C17.25 5.973 17.473 5.75 17.75 5.75C18.027 5.75 18.25 5.973 18.25 6.25Z","key":"6"})
  );
});

FormControlsPlus.displayName = 'FormControlsPlus';

export default FormControlsPlus;
export { FormControlsPlus };
