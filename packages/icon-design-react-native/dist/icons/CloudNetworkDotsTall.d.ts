import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudNetworkDotsTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudNetworkDotsTall: ForwardRefExoticComponent<CloudNetworkDotsTallProps & RefAttributes<Svg>>;

export default CloudNetworkDotsTall;
export { CloudNetworkDotsTall };
