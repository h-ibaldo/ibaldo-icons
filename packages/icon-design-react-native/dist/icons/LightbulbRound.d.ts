import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LightbulbRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LightbulbRound: ForwardRefExoticComponent<LightbulbRoundProps & RefAttributes<Svg>>;

export default LightbulbRound;
export { LightbulbRound };
