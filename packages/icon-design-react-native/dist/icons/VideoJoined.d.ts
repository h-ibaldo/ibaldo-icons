import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VideoJoinedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VideoJoined: ForwardRefExoticComponent<VideoJoinedProps & RefAttributes<Svg>>;

export default VideoJoined;
export { VideoJoined };
