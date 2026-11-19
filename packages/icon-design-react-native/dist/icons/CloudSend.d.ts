import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudSendProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudSend: ForwardRefExoticComponent<CloudSendProps & RefAttributes<Svg>>;

export default CloudSend;
export { CloudSend };
