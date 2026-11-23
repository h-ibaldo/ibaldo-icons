import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailCheckRoundedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailCheckRounded: ForwardRefExoticComponent<MailCheckRoundedProps & RefAttributes<Svg>>;

export default MailCheckRounded;
export { MailCheckRounded };
