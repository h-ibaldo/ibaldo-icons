import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlertCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlertCircle: ForwardRefExoticComponent<AlertCircleProps & RefAttributes<Svg>>;

export default AlertCircle;
export { AlertCircle };
