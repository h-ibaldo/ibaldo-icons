import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockMinus: ForwardRefExoticComponent<ClockMinusProps & RefAttributes<Svg>>;

export default ClockMinus;
export { ClockMinus };
