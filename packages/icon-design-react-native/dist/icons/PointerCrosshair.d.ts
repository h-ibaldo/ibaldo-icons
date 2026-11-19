import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerCrosshairProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerCrosshair: ForwardRefExoticComponent<PointerCrosshairProps & RefAttributes<Svg>>;

export default PointerCrosshair;
export { PointerCrosshair };
