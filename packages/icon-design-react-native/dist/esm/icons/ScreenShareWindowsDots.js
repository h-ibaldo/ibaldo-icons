import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Rect } from 'react-native-svg';

const ScreenShareWindowsDots = forwardRef(function ScreenShareWindowsDots(
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
    createElement(Path, {"d":"M5.974731440099276,15.000000003885361h-3c-.552284749819592,0-1-.447715250167676-1-1V4.000000003885361c0-.552284749828686.447715250180408-1,1-1h14c.552284749830505,0,1,.447715250171314,1,1v5","key":"0"}),
    createElement(Rect, {"x":"5.974731440099276","y":"9.000000003885361","width":"16","height":"12","rx":"1","ry":"1","key":"1"}),
    createElement(Line, {"x1":"17.974731440099276","y1":"14.990000003885143","x2":"17.974731440099276","y2":"15.000000003885361","key":"2"}),
    createElement(Line, {"x1":"17.974731440099276","y1":"11.990000003885143","x2":"17.974731440099276","y2":"12.000000003885361","key":"3"}),
    createElement(Line, {"x1":"14.974731440099276","y1":"14.990000003885143","x2":"14.974731440099276","y2":"15.000000003885361","key":"4"}),
    createElement(Line, {"x1":"11.974731440099276","y1":"14.990000003885143","x2":"11.974731440099276","y2":"15.000000003885361","key":"5"}),
    createElement(Line, {"x1":"8.974731440099276","y1":"14.990000003885143","x2":"8.974731440099276","y2":"15.000000003885361","key":"6"})
  );
});

ScreenShareWindowsDots.displayName = 'ScreenShareWindowsDots';

export default ScreenShareWindowsDots;
export { ScreenShareWindowsDots };
