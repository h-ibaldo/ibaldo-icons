import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LightbulbShineScrewProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LightbulbShineScrew: ForwardRefExoticComponent<LightbulbShineScrewProps & RefAttributes<Svg>>;

export default LightbulbShineScrew;
export { LightbulbShineScrew };
