import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudSendTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudSendTall: ForwardRefExoticComponent<CloudSendTallProps & RefAttributes<Svg>>;

export default CloudSendTall;
export { CloudSendTall };
