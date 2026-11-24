import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlertSquareSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlertSquareSmall: ForwardRefExoticComponent<AlertSquareSmallProps & RefAttributes<Svg>>;

export default AlertSquareSmall;
export { AlertSquareSmall };
