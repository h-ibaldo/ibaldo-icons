import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockMailProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockMail: ForwardRefExoticComponent<ClockMailProps & RefAttributes<Svg>>;

export default ClockMail;
export { ClockMail };
