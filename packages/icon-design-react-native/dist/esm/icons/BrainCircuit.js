import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const BrainCircuit = forwardRef(function BrainCircuit(
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
    createElement(Path, {"d":"M12 19C12 20.656 10.656 22 9 22C7.344 22 6 20.656 6 19C6 18.645 6.063 18.305 6.176 17.988C3.84 17.82 2 15.875 2 13.5C2 11.617 3.156 10.004 4.801 9.332C4.309 8.875 4 8.223 4 7.5C4 6.121 5.121 5 6.5 5C6.695 5 6.883 5.023 7.063 5.063C7.023 4.883 7 4.695 7 4.5C7 3.121 8.121 2 9.5 2C10.879 2 12 3.121 12 4.5","key":"0"}),
    createElement(Path, {"d":"M9 17.242C8.285 17.723 7.426 18 6.5 18C6.332 18 6.164 17.992 6 17.973","key":"1"}),
    createElement(Path, {"d":"M12 9.5C12 11.156 10.656 12.5 9 12.5","key":"2"}),
    createElement(Path, {"d":"M12 4L12 19","key":"3"}),
    createElement(Path, {"d":"M8 6L7 5","key":"4"}),
    createElement(Path, {"d":"M12 7L16 7L16 3","key":"5"}),
    createElement(Path, {"d":"M12 11L18 11L21 7","key":"6"}),
    createElement(Path, {"d":"M12 15L18 15L20 17","key":"7"}),
    createElement(Path, {"d":"M16 20L12 18","key":"8"}),
    createElement(Path, {"d":"M15 20C15 19.449 15.449 19 16 19C16.551 19 17 19.449 17 20C17 20.551 16.551 21 16 21C15.449 21 15 20.551 15 20Z","key":"9"}),
    createElement(Path, {"d":"M19 17C19 16.449 19.449 16 20 16C20.551 16 21 16.449 21 17C21 17.551 20.551 18 20 18C19.449 18 19 17.551 19 17Z","key":"10"}),
    createElement(Path, {"d":"M20 7C20 6.449 20.449 6 21 6C21.551 6 22 6.449 22 7C22 7.551 21.551 8 21 8C20.449 8 20 7.551 20 7Z","key":"11"}),
    createElement(Path, {"d":"M15 3C15 2.449 15.449 2 16 2C16.551 2 17 2.449 17 3C17 3.551 16.551 4 16 4C15.449 4 15 3.551 15 3Z","key":"12"})
  );
});

BrainCircuit.displayName = 'BrainCircuit';

export default BrainCircuit;
export { BrainCircuit };
