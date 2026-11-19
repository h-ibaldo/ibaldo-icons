import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LightbulbFilamentWavyRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LightbulbFilamentWavyRound: ForwardRefExoticComponent<LightbulbFilamentWavyRoundProps & RefAttributes<Svg>>;

export default LightbulbFilamentWavyRound;
export { LightbulbFilamentWavyRound };
