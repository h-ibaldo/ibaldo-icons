import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudNetworkDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudNetworkDots: ForwardRefExoticComponent<CloudNetworkDotsProps & RefAttributes<Svg>>;

export default CloudNetworkDots;
export { CloudNetworkDots };
