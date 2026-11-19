import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerCardStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerCardStraight: ForwardRefExoticComponent<PointerCardStraightProps & RefAttributes<Svg>>;

export default PointerCardStraight;
export { PointerCardStraight };
