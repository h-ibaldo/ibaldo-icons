import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrophyRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrophyRound: ForwardRefExoticComponent<TrophyRoundProps & RefAttributes<Svg>>;

export default TrophyRound;
export { TrophyRound };
