import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellAlertProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellAlert: ForwardRefExoticComponent<BellAlertProps & RefAttributes<Svg>>;

export default BellAlert;
export { BellAlert };
