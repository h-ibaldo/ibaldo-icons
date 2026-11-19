import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PlayCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PlayCircle: ForwardRefExoticComponent<PlayCircleProps & RefAttributes<Svg>>;

export default PlayCircle;
export { PlayCircle };
