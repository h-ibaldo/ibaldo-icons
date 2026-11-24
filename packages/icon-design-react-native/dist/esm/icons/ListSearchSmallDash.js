import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ListSearchSmallDash = forwardRef(function ListSearchSmallDash(
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
    createElement(Path, {"d":"M14 16.922C14 14.715 15.789 12.922 18 12.922C20.211 12.922 22 14.715 22 16.922C22 19.133 20.211 20.922 18 20.922C15.789 20.922 14 19.133 14 16.922Z","key":"0"}),
    createElement(Path, {"d":"M13 22L15.215 19.785","key":"1"}),
    createElement(Path, {"d":"M8 4L14.5 4","key":"2"}),
    createElement(Path, {"d":"M8 9L14.5 9","key":"3"}),
    createElement(Path, {"d":"M3 4L4 4","key":"4"}),
    createElement(Path, {"d":"M3 9L4 9","key":"5"}),
    createElement(Path, {"d":"M8 14L10 14","key":"6"}),
    createElement(Path, {"d":"M3 14L4 14","key":"7"})
  );
});

ListSearchSmallDash.displayName = 'ListSearchSmallDash';

export default ListSearchSmallDash;
export { ListSearchSmallDash };
