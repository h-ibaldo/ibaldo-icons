import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LightbulbFilamentZigzagRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LightbulbFilamentZigzagRound: ForwardRefExoticComponent<LightbulbFilamentZigzagRoundProps & RefAttributes<Svg>>;

export default LightbulbFilamentZigzagRound;
export { LightbulbFilamentZigzagRound };
