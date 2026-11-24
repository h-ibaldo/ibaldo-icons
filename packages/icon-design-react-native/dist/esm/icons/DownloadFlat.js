import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline } from 'react-native-svg';

const DownloadFlat = forwardRef(function DownloadFlat(
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
    createElement(Polyline, {"points":"16.974731450037325 11.00000000113414 11.974731449364299 16.000000000462023 6.974731450037325 10.999999999786269","key":"0"}),
    createElement(Line, {"x1":"11.974731451114167","y1":"3.000000000462023","x2":"11.974731449364299","y2":"16.000000000462023","key":"1"}),
    createElement(Line, {"x1":"2.974731450037325","y1":"21.000000000462933","x2":"20.974731450037325","y2":"21.000000000462933","key":"2"})
  );
});

DownloadFlat.displayName = 'DownloadFlat';

export default DownloadFlat;
export { DownloadFlat };
