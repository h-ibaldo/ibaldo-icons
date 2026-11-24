import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WarningDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WarningDashed: ForwardRefExoticComponent<WarningDashedProps & RefAttributes<Svg>>;

export default WarningDashed;
export { WarningDashed };
