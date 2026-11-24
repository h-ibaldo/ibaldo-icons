import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailboxProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Mailbox: ForwardRefExoticComponent<MailboxProps & RefAttributes<Svg>>;

export default Mailbox;
export { Mailbox };
