import { createElement, forwardRef } from 'react';
import Svg, { Polyline, Rect } from 'react-native-svg';

const PanelBottom = forwardRef(function PanelBottom(
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
    createElement(Rect, {"x":"2.050537047695798","y":"1.997697219531346","width":"20","height":"19.999864816291392","rx":"2.00000000000091","ry":"2.00000000000091","transform":"translate(24.101074094785993 23.99525925596236) rotate(-180)","key":"0"}),
    createElement(Polyline, {"points":"6.050537043445729 21.997562020008445 6.050537043445729 16.997562020008445 18.050537043445729 16.997562020008445 18.050537043445729 21.997562020008445","key":"1"})
  );
});

PanelBottom.displayName = 'PanelBottom';

export default PanelBottom;
export { PanelBottom };
