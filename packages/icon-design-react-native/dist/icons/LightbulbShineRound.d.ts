import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LightbulbShineRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LightbulbShineRound: ForwardRefExoticComponent<LightbulbShineRoundProps & RefAttributes<Svg>>;

export default LightbulbShineRound;
export { LightbulbShineRound };
