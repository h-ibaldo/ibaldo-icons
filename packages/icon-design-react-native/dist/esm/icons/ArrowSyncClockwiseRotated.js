import { createElement, forwardRef } from 'react';
import Svg, { Path, Polyline } from 'react-native-svg';

const ArrowSyncClockwiseRotated = forwardRef(function ArrowSyncClockwiseRotated(
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
    createElement(Polyline, {"points":"11 2 13 4 11 6","key":"0"}),
    createElement(Polyline, {"points":"12.99999999981992 22 11 19.999999999818101 13.00000000018008 18","key":"1"}),
    createElement(Path, {"d":"M16.775806124480368,5.581312473917933c1.956869189460122,1.458376179940387,3.224193875519632,3.790532082850405,3.224193875519632,6.418687526082067,0,4.418277998400299-3.581722001599701,8-8,8","key":"2"}),
    createElement(Path, {"d":"M7.224193874950288,18.418687525638234c-1.956869189340068-1.458376180107734-3.224193875190394-3.79053208312871-3.224193874950288-6.418687526358553.000000000400178-4.418277998400299,3.581722002320021-7.999999999679858,8.00000000072032-7.99999999927968","key":"3"})
  );
});

ArrowSyncClockwiseRotated.displayName = 'ArrowSyncClockwiseRotated';

export default ArrowSyncClockwiseRotated;
export { ArrowSyncClockwiseRotated };
