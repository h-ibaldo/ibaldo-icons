import { createElement, forwardRef } from 'react';
import Svg, { Rect } from 'react-native-svg';

const PictureInPicture = forwardRef(function PictureInPicture(
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
    createElement(Rect, {"x":"1.999999993601705","y":"2.998779299956368","width":"20","height":"18","rx":".999999999993015","ry":".999999999993015","transform":"translate(23.99999998666507 23.997558600451129) rotate(-180)","key":"0"}),
    createElement(Rect, {"x":"9.999999994692189","y":"10.998779300069145","width":"7.999999998810381","height":"5.999999998679414","transform":"translate(27.999999987672759 27.997558599339754) rotate(-180)","key":"1"})
  );
});

PictureInPicture.displayName = 'PictureInPicture';

export default PictureInPicture;
export { PictureInPicture };
