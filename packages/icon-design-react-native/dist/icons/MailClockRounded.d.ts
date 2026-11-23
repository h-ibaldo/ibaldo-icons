import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailClockRoundedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailClockRounded: ForwardRefExoticComponent<MailClockRoundedProps & RefAttributes<Svg>>;

export default MailClockRounded;
export { MailClockRounded };
