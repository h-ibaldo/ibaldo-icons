import { createElement, forwardRef } from 'react';
import Svg, { Path, Polyline, Rect } from 'react-native-svg';

const RotateScreenTabRight = forwardRef(function RotateScreenTabRight(
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
    createElement(Rect, {"x":"1.974731413605696","y":"9.998779298541194","width":"20","height":"12","rx":"2","ry":"2","transform":"translate(23.949462827211391 31.997558597082389) rotate(180)","key":"0"}),
    createElement(Polyline, {"points":"14.974731413605696 5.998779298537556 18.974731413605696 5.998779298537556 18.974731413605696 1.998779298537556","key":"1"}),
    createElement(Path, {"d":"M18.895751921416377,5.998779298541194c-1.383911132810681-2.388916015625-3.961547851560681-4-6.921020507810681-4s-5.537109375,1.611083984375-6.921020507808862,4","key":"2"}),
    createElement(Polyline, {"points":"21.975222099246821 13.998885135864839 19.975222099246821 13.998885135857563 19.975222099246821 17.997618198463897 21.975222099246821 17.997618198471173","key":"3"})
  );
});

RotateScreenTabRight.displayName = 'RotateScreenTabRight';

export default RotateScreenTabRight;
export { RotateScreenTabRight };
