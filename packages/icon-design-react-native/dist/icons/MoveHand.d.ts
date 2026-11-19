import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MoveHandProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MoveHand: ForwardRefExoticComponent<MoveHandProps & RefAttributes<Svg>>;

export default MoveHand;
export { MoveHand };
