import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline } from 'react-native-svg';

const UploadFlat = forwardRef(function UploadFlat(
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
    createElement(Polyline, {"points":"6.97473145017193 7.999999999336069 11.974731451296975 3.000000000462023 16.97473145017193 8.000000001585249","key":"0"}),
    createElement(Line, {"x1":"11.974731448378407","y1":"16.000000000462023","x2":"11.974731451296975","y2":"3.000000000462023","key":"1"}),
    createElement(Line, {"x1":"2.974731450037325","y1":"21.000000000462933","x2":"20.974731450037325","y2":"21.000000000462933","key":"2"})
  );
});

UploadFlat.displayName = 'UploadFlat';

export default UploadFlat;
export { UploadFlat };
