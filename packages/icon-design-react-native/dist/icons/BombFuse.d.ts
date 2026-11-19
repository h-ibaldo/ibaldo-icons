import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BombFuseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BombFuse: ForwardRefExoticComponent<BombFuseProps & RefAttributes<Svg>>;

export default BombFuse;
export { BombFuse };
