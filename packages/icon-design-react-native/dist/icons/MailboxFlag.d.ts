import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailboxFlagProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailboxFlag: ForwardRefExoticComponent<MailboxFlagProps & RefAttributes<Svg>>;

export default MailboxFlag;
export { MailboxFlag };
