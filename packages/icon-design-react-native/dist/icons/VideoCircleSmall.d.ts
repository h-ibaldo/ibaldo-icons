import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VideoCircleSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VideoCircleSmall: ForwardRefExoticComponent<VideoCircleSmallProps & RefAttributes<Svg>>;

export default VideoCircleSmall;
export { VideoCircleSmall };
