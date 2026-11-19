import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SunCircleSplitSparseTilted = forwardRef(function SunCircleSplitSparseTilted(
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
    createElement(Path, {"d":"M12.094 2.008C9.504 1.98 6.902 2.953 4.93 4.93C2.949 6.906 1.98 9.508 2.004 12.098","key":"0"}),
    createElement(Path, {"d":"M3.305 16.926C4.578 19.18 6.723 20.941 9.422 21.664C12.125 22.383 14.859 21.926 17.09 20.605","key":"1"}),
    createElement(Path, {"d":"M16.926 3.305C19.18 4.578 20.941 6.723 21.664 9.422C22.383 12.125 21.926 14.859 20.605 17.09","key":"2"}),
    createElement(Path, {"d":"M14 12C14 10.895 13.105 10 12 10C10.895 10 10 10.895 10 12C10 13.105 10.895 14 12 14C13.105 14 14 13.105 14 12Z","key":"3"}),
    createElement(Path, {"d":"M12 6L12 7","key":"4"}),
    createElement(Path, {"d":"M12 17L12 18","key":"5"}),
    createElement(Path, {"d":"M6.805 9L7.668 9.5","key":"6"}),
    createElement(Path, {"d":"M16.332 14.5L17.195 15","key":"7"}),
    createElement(Path, {"d":"M6.805 15L7.668 14.5","key":"8"}),
    createElement(Path, {"d":"M16.332 9.5L17.195 9","key":"9"})
  );
});

SunCircleSplitSparseTilted.displayName = 'SunCircleSplitSparseTilted';

export default SunCircleSplitSparseTilted;
export { SunCircleSplitSparseTilted };
