import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WarningOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WarningOff: ForwardRefExoticComponent<WarningOffProps & RefAttributes<Svg>>;

export default WarningOff;
export { WarningOff };
