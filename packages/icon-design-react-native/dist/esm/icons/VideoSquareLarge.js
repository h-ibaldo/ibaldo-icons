import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const VideoSquareLarge = forwardRef(function VideoSquareLarge(
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
    createElement(Path, {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z","key":"0"}),
    createElement(Path, {"d":"M14 10L14 9.156C14 8.516 13.484 8 12.844 8L7.156 8C6.516 8 6 8.516 6 9.156L6 14.844C6 15.484 6.516 16 7.156 16L12.844 16C13.484 16 14 15.484 14 14.844L14 14L17.277 15.637C17.609 15.805 18 15.563 18 15.191L18 8.809C18 8.438 17.609 8.195 17.277 8.363Z","key":"1"})
  );
});

VideoSquareLarge.displayName = 'VideoSquareLarge';

export default VideoSquareLarge;
export { VideoSquareLarge };
