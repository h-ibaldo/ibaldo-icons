import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtAlertProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtAlert: ForwardRefExoticComponent<AtAlertProps & RefAttributes<Svg>>;

export default AtAlert;
export { AtAlert };
