import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Scissors = forwardRef(function Scissors(
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
    createElement(Path, {"d":"M9.598 7.5C8.77 8.938 6.934 9.426 5.5 8.598C4.066 7.77 3.574 5.938 4.402 4.5C5.23 3.066 7.066 2.574 8.5 3.402C9.934 4.23 10.426 6.066 9.598 7.5Z","key":"0"}),
    createElement(Path, {"d":"M9.598 16.098C8.77 14.664 6.934 14.172 5.5 15C4.066 15.828 3.574 17.664 4.402 19.098C5.23 20.535 7.066 21.023 8.5 20.195C9.934 19.367 10.426 17.535 9.598 16.098Z","key":"1"}),
    createElement(Path, {"d":"M5.5 15L21.09 6","key":"2"}),
    createElement(Path, {"d":"M21.09 17.598L14.027 13.52","key":"3"}),
    createElement(Path, {"d":"M11.043 11.801L5.5 8.598","key":"4"})
  );
});

Scissors.displayName = 'Scissors';

export default Scissors;
export { Scissors };
