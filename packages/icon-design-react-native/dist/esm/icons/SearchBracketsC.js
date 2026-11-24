import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SearchBracketsC = forwardRef(function SearchBracketsC(
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
    createElement(Path, {"d":"M12 8L14 10L12 12","key":"0"}),
    createElement(Path, {"d":"M8 8L6 10L8 12","key":"1"}),
    createElement(Path, {"d":"M18 10C18 14.418 14.418 18 10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10Z","key":"2"}),
    createElement(Path, {"d":"M15.656 15.656L22 22","key":"3"})
  );
});

SearchBracketsC.displayName = 'SearchBracketsC';

export default SearchBracketsC;
export { SearchBracketsC };
