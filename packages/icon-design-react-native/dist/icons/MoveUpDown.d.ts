import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MoveUpDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MoveUpDown: ForwardRefExoticComponent<MoveUpDownProps & RefAttributes<Svg>>;

export default MoveUpDown;
export { MoveUpDown };
