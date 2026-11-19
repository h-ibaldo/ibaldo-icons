import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WarningRaysProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WarningRays: ForwardRefExoticComponent<WarningRaysProps & RefAttributes<Svg>>;

export default WarningRays;
export { WarningRays };
