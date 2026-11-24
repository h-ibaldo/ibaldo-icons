import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Polyline, Rect } from 'react-native-svg';

const UploadSquareStackCorner = forwardRef(function UploadSquareStackCorner(
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
    createElement(Rect, {"x":"6.974731450026411","y":"2.000000000462023","width":"14","height":"16","rx":"3","ry":"3","transform":"translate(27.949462900052822 20.000000000924047) rotate(180)","key":"0"}),
    createElement(Path, {"d":"M16.974731450026411,22.000000000462933H5.974731450026411c-1.656854249493335,0-3-1.343145750510303-3-3.000000000000909V6.000000000462023","key":"1"}),
    createElement(Polyline, {"points":"10.974731450026411 9.000000000462023 13.974731450699437 6.000000000462023 16.974731450026411 9.000000000462023","key":"2"}),
    createElement(Line, {"x1":"13.974731448949569","y1":"14.000000000462023","x2":"13.974731450699437","y2":"6.000000000462023","key":"3"})
  );
});

UploadSquareStackCorner.displayName = 'UploadSquareStackCorner';

export default UploadSquareStackCorner;
export { UploadSquareStackCorner };
