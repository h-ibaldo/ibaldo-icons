import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareStackPlusCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareStackPlusCorner: ForwardRefExoticComponent<SquareStackPlusCornerProps & RefAttributes<Svg>>;

export default SquareStackPlusCorner;
export { SquareStackPlusCorner };
