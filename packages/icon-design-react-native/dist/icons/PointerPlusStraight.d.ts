import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerPlusStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerPlusStraight: ForwardRefExoticComponent<PointerPlusStraightProps & RefAttributes<Svg>>;

export default PointerPlusStraight;
export { PointerPlusStraight };
