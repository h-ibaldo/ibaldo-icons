import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudSadProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudSad: ForwardRefExoticComponent<CloudSadProps & RefAttributes<Svg>>;

export default CloudSad;
export { CloudSad };
