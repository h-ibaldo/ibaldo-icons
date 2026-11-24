import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LightbulbShineCapProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LightbulbShineCap: ForwardRefExoticComponent<LightbulbShineCapProps & RefAttributes<Svg>>;

export default LightbulbShineCap;
export { LightbulbShineCap };
