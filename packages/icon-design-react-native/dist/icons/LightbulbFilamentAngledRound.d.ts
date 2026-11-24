import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LightbulbFilamentAngledRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LightbulbFilamentAngledRound: ForwardRefExoticComponent<LightbulbFilamentAngledRoundProps & RefAttributes<Svg>>;

export default LightbulbFilamentAngledRound;
export { LightbulbFilamentAngledRound };
