import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ListRefresh = forwardRef(function ListRefresh(
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
    createElement(Path, {"d":"M2 4L21 4","key":"0"}),
    createElement(Path, {"d":"M2 12L8 12","key":"1"}),
    createElement(Path, {"d":"M2 20L8 20","key":"2"}),
    createElement(Path, {"d":"M19 14L19 11L22 11","key":"3"}),
    createElement(Path, {"d":"M19 11.422C20.766 12.195 22 13.949 22 16C22 18.762 19.762 21 17 21C14.238 21 12 18.762 12 16C12 13.949 13.234 12.195 15 11.422","key":"4"})
  );
});

ListRefresh.displayName = 'ListRefresh';

export default ListRefresh;
export { ListRefresh };
