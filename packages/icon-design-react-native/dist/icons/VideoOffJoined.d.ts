import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VideoOffJoinedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VideoOffJoined: ForwardRefExoticComponent<VideoOffJoinedProps & RefAttributes<Svg>>;

export default VideoOffJoined;
export { VideoOffJoined };
