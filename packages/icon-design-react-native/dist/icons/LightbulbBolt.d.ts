import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LightbulbBoltProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LightbulbBolt: ForwardRefExoticComponent<LightbulbBoltProps & RefAttributes<Svg>>;

export default LightbulbBolt;
export { LightbulbBolt };
