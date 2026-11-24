import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerStraight: ForwardRefExoticComponent<PointerStraightProps & RefAttributes<Svg>>;

export default PointerStraight;
export { PointerStraight };
