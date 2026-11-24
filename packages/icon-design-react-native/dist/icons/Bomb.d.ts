import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BombProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Bomb: ForwardRefExoticComponent<BombProps & RefAttributes<Svg>>;

export default Bomb;
export { Bomb };
