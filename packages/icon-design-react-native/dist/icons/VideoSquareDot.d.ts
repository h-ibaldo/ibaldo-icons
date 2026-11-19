import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VideoSquareDotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VideoSquareDot: ForwardRefExoticComponent<VideoSquareDotProps & RefAttributes<Svg>>;

export default VideoSquareDot;
export { VideoSquareDot };
