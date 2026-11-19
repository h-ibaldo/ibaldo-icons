import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlertCircleSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlertCircleSmall: ForwardRefExoticComponent<AlertCircleSmallProps & RefAttributes<Svg>>;

export default AlertCircleSmall;
export { AlertCircleSmall };
