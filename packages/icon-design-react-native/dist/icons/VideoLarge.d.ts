import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VideoLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VideoLarge: ForwardRefExoticComponent<VideoLargeProps & RefAttributes<Svg>>;

export default VideoLarge;
export { VideoLarge };
