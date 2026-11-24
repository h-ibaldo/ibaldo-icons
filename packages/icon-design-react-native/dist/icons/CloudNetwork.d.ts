import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudNetworkProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudNetwork: ForwardRefExoticComponent<CloudNetworkProps & RefAttributes<Svg>>;

export default CloudNetwork;
export { CloudNetwork };
