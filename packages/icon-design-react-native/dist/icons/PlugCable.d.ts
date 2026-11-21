import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PlugCableProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PlugCable: ForwardRefExoticComponent<PlugCableProps & RefAttributes<Svg>>;

export default PlugCable;
export { PlugCable };
