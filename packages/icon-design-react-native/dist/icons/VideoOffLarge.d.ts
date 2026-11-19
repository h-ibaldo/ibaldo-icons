import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VideoOffLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VideoOffLarge: ForwardRefExoticComponent<VideoOffLargeProps & RefAttributes<Svg>>;

export default VideoOffLarge;
export { VideoOffLarge };
