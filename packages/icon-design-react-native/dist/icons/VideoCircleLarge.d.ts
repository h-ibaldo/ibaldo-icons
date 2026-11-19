import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VideoCircleLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VideoCircleLarge: ForwardRefExoticComponent<VideoCircleLargeProps & RefAttributes<Svg>>;

export default VideoCircleLarge;
export { VideoCircleLarge };
