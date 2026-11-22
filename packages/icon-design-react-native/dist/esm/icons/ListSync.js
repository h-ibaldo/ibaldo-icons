import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ListSync = forwardRef(function ListSync(
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
    createElement(Path, {"d":"M22.039 11L22.039 14L19.039 14","key":"0"}),
    createElement(Path, {"d":"M12.039 21L12.039 18L15.039 18","key":"1"}),
    createElement(Path, {"d":"M21.617 18C20.848 19.766 19.09 21 17.039 21C14.992 21 13.234 19.766 12.465 18","key":"2"}),
    createElement(Path, {"d":"M12.473 14C13.246 12.238 14.992 11 17.039 11C19.09 11 20.848 12.234 21.617 14","key":"3"}),
    createElement(Path, {"d":"M2 4L21 4","key":"4"}),
    createElement(Path, {"d":"M2 12L8 12","key":"5"}),
    createElement(Path, {"d":"M2 20L8 20","key":"6"})
  );
});

ListSync.displayName = 'ListSync';

export default ListSync;
export { ListSync };
