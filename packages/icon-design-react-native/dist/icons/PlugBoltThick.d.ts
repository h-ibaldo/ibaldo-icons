import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PlugBoltThickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PlugBoltThick: ForwardRefExoticComponent<PlugBoltThickProps & RefAttributes<Svg>>;

export default PlugBoltThick;
export { PlugBoltThick };
