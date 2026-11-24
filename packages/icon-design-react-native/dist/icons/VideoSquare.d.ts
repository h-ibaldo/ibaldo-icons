import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VideoSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VideoSquare: ForwardRefExoticComponent<VideoSquareProps & RefAttributes<Svg>>;

export default VideoSquare;
export { VideoSquare };
