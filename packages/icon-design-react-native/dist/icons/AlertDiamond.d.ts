import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlertDiamondProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlertDiamond: ForwardRefExoticComponent<AlertDiamondProps & RefAttributes<Svg>>;

export default AlertDiamond;
export { AlertDiamond };
