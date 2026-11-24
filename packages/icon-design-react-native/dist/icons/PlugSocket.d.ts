import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PlugSocketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PlugSocket: ForwardRefExoticComponent<PlugSocketProps & RefAttributes<Svg>>;

export default PlugSocket;
export { PlugSocket };
