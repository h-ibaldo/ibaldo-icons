import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VideoReelsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VideoReels: ForwardRefExoticComponent<VideoReelsProps & RefAttributes<Svg>>;

export default VideoReels;
export { VideoReels };
