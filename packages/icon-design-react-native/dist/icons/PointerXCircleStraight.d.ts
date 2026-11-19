import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerXCircleStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerXCircleStraight: ForwardRefExoticComponent<PointerXCircleStraightProps & RefAttributes<Svg>>;

export default PointerXCircleStraight;
export { PointerXCircleStraight };
