import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailboxMailProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailboxMail: ForwardRefExoticComponent<MailboxMailProps & RefAttributes<Svg>>;

export default MailboxMail;
export { MailboxMail };
