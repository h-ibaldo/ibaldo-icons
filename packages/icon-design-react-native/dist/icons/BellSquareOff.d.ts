import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellSquareOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellSquareOff: ForwardRefExoticComponent<BellSquareOffProps & RefAttributes<Svg>>;

export default BellSquareOff;
export { BellSquareOff };
