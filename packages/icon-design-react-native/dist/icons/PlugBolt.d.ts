import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PlugBoltProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PlugBolt: ForwardRefExoticComponent<PlugBoltProps & RefAttributes<Svg>>;

export default PlugBolt;
export { PlugBolt };
