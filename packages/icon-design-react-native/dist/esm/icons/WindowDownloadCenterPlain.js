import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Polyline } from 'react-native-svg';

const WindowDownloadCenterPlain = forwardRef(function WindowDownloadCenterPlain(
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
    createElement(Path, {"d":"M5.999999993642632,21.998779299956368h-1c-1.656854249489697,0-3-1.343145750510303-3-3V4.998779299956368c0-1.656854249493335,1.343145750510303-3,3-3h14c1.656854249489697,0,3,1.343145750506665,3,3v14c0,1.656854249489697-1.343145750510303,3-3,3h-1","key":"0"}),
    createElement(Line, {"x1":"1.999999993642632","y1":"7.998779299956368","x2":"21.999999993642632","y2":"7.998779299956368","key":"1"}),
    createElement(Polyline, {"points":"14.99999999350257 18.998779300225578 11.999999993233359 21.998779299956368 8.99999999350257 18.998779299687158","key":"2"}),
    createElement(Line, {"x1":"11.999999993233359","y1":"21.998779299956368","x2":"11.99999999404281","y2":"12.998779299956368","key":"3"})
  );
});

WindowDownloadCenterPlain.displayName = 'WindowDownloadCenterPlain';

export default WindowDownloadCenterPlain;
export { WindowDownloadCenterPlain };
