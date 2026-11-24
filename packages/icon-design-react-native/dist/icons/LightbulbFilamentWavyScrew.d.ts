import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LightbulbFilamentWavyScrewProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LightbulbFilamentWavyScrew: ForwardRefExoticComponent<LightbulbFilamentWavyScrewProps & RefAttributes<Svg>>;

export default LightbulbFilamentWavyScrew;
export { LightbulbFilamentWavyScrew };
