import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LightbulbBoltCapProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LightbulbBoltCap: ForwardRefExoticComponent<LightbulbBoltCapProps & RefAttributes<Svg>>;

export default LightbulbBoltCap;
export { LightbulbBoltCap };
