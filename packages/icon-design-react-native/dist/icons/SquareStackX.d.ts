import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareStackXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareStackX: ForwardRefExoticComponent<SquareStackXProps & RefAttributes<Svg>>;

export default SquareStackX;
export { SquareStackX };
