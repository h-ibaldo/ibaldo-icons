import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VideoReelsLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VideoReelsLarge: ForwardRefExoticComponent<VideoReelsLargeProps & RefAttributes<Svg>>;

export default VideoReelsLarge;
export { VideoReelsLarge };
