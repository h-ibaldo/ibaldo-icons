import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LightbulbBoltRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LightbulbBoltRound: ForwardRefExoticComponent<LightbulbBoltRoundProps & RefAttributes<Svg>>;

export default LightbulbBoltRound;
export { LightbulbBoltRound };
