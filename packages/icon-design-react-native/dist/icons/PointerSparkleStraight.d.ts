import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerSparkleStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerSparkleStraight: ForwardRefExoticComponent<PointerSparkleStraightProps & RefAttributes<Svg>>;

export default PointerSparkleStraight;
export { PointerSparkleStraight };
