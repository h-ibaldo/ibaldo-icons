import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VideoSquareLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VideoSquareLarge: ForwardRefExoticComponent<VideoSquareLargeProps & RefAttributes<Svg>>;

export default VideoSquareLarge;
export { VideoSquareLarge };
