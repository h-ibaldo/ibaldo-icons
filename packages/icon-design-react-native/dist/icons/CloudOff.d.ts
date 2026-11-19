import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudOff: ForwardRefExoticComponent<CloudOffProps & RefAttributes<Svg>>;

export default CloudOff;
export { CloudOff };
