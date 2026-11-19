import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BombCapProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BombCap: ForwardRefExoticComponent<BombCapProps & RefAttributes<Svg>>;

export default BombCap;
export { BombCap };
