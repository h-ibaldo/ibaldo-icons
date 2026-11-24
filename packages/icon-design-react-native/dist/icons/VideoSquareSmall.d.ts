import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VideoSquareSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VideoSquareSmall: ForwardRefExoticComponent<VideoSquareSmallProps & RefAttributes<Svg>>;

export default VideoSquareSmall;
export { VideoSquareSmall };
