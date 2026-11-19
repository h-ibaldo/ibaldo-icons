import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerCardStraight2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerCardStraight2: ForwardRefExoticComponent<PointerCardStraight2Props & RefAttributes<Svg>>;

export default PointerCardStraight2;
export { PointerCardStraight2 };
