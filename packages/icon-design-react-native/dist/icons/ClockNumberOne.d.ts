import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockNumberOneProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockNumberOne: ForwardRefExoticComponent<ClockNumberOneProps & RefAttributes<Svg>>;

export default ClockNumberOne;
export { ClockNumberOne };
