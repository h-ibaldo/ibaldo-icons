import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PilcrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Pilcrow: ForwardRefExoticComponent<PilcrowProps & RefAttributes<Svg>>;

export default Pilcrow;
export { Pilcrow };
