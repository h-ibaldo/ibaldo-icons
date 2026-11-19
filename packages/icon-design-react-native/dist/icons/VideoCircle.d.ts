import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VideoCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VideoCircle: ForwardRefExoticComponent<VideoCircleProps & RefAttributes<Svg>>;

export default VideoCircle;
export { VideoCircle };
