import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrophyCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrophyCircle: ForwardRefExoticComponent<TrophyCircleProps & RefAttributes<Svg>>;

export default TrophyCircle;
export { TrophyCircle };
