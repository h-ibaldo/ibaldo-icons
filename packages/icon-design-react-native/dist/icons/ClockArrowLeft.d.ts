import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockArrowLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockArrowLeft: ForwardRefExoticComponent<ClockArrowLeftProps & RefAttributes<Svg>>;

export default ClockArrowLeft;
export { ClockArrowLeft };
