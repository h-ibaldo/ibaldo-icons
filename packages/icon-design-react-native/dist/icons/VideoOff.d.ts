import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VideoOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VideoOff: ForwardRefExoticComponent<VideoOffProps & RefAttributes<Svg>>;

export default VideoOff;
export { VideoOff };
