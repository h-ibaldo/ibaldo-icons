import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const DatabaseSearch = forwardRef(function DatabaseSearch(
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
    createElement(Path, {"d":"M2 7C2 4.789 5.582 3 10 3C14.418 3 18 4.789 18 7C18 9.211 14.418 11 10 11C5.582 11 2 9.211 2 7Z","key":"0"}),
    createElement(Path, {"d":"M2 17L2 7","key":"1"}),
    createElement(Path, {"d":"M12 20.875C11.359 20.957 10.691 21 10 21C5.582 21 2 19.211 2 17","key":"2"}),
    createElement(Path, {"d":"M18 7L18 11","key":"3"}),
    createElement(Path, {"d":"M14 17C14 15.344 15.344 14 17 14C18.656 14 20 15.344 20 17C20 18.656 18.656 20 17 20C15.344 20 14 18.656 14 17Z","key":"4"}),
    createElement(Path, {"d":"M19.121 19.121L22 22","key":"5"}),
    createElement(Path, {"d":"M11 15.969C10.672 15.988 10.34 16 10 16C5.582 16 2 14.211 2 12","key":"6"})
  );
});

DatabaseSearch.displayName = 'DatabaseSearch';

export default DatabaseSearch;
export { DatabaseSearch };
