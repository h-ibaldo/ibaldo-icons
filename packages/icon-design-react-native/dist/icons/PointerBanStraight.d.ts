import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerBanStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerBanStraight: ForwardRefExoticComponent<PointerBanStraightProps & RefAttributes<Svg>>;

export default PointerBanStraight;
export { PointerBanStraight };
