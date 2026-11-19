import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudAlertProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudAlert: ForwardRefExoticComponent<CloudAlertProps & RefAttributes<Svg>>;

export default CloudAlert;
export { CloudAlert };
