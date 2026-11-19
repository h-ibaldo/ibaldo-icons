import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockNumberTwoProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockNumberTwo: ForwardRefExoticComponent<ClockNumberTwoProps & RefAttributes<Svg>>;

export default ClockNumberTwo;
export { ClockNumberTwo };
