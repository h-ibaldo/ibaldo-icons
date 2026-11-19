import { createElement, forwardRef } from 'react';
import Svg, { Path, Polyline } from 'react-native-svg';

const ArrowSyncClockwise = forwardRef(function ArrowSyncClockwise(
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
    createElement(Polyline, {"points":"2 13 4 11 6 13","key":"0"}),
    createElement(Polyline, {"points":"22.000000000100044 11.000000000169166 19.999999999919964 12.999999999989086 18.000000000100044 10.999999999809006","key":"1"}),
    createElement(Path, {"d":"M5.581312473929756,7.224193875519632c1.458376179940387-1.956869189469217,3.790532082850405-3.224193875519632,6.418687526070244-3.224193875519632,4.418277998400299,0,8,3.581722001588787,8,8","key":"2"}),
    createElement(Path, {"d":"M18.418687525650057,16.775806125049712c-1.458376180110463,1.956869189329154-3.790532083140533,3.224193875179481-6.418687526360372,3.224193874950288-4.41827799839939-.000000000400178-7.999999999679858-3.581722002320021-7.999999999289685-8.00000000072032","key":"3"})
  );
});

ArrowSyncClockwise.displayName = 'ArrowSyncClockwise';

export default ArrowSyncClockwise;
export { ArrowSyncClockwise };
