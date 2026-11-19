import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerPlusCircleStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerPlusCircleStraight: ForwardRefExoticComponent<PointerPlusCircleStraightProps & RefAttributes<Svg>>;

export default PointerPlusCircleStraight;
export { PointerPlusCircleStraight };
