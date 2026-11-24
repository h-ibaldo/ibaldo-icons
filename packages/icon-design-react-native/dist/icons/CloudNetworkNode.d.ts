import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudNetworkNodeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudNetworkNode: ForwardRefExoticComponent<CloudNetworkNodeProps & RefAttributes<Svg>>;

export default CloudNetworkNode;
export { CloudNetworkNode };
