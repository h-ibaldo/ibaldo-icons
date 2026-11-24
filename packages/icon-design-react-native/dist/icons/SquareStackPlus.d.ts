import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareStackPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareStackPlus: ForwardRefExoticComponent<SquareStackPlusProps & RefAttributes<Svg>>;

export default SquareStackPlus;
export { SquareStackPlus };
