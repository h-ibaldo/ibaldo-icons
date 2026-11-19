import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailboxFlagBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailboxFlagBare: ForwardRefExoticComponent<MailboxFlagBareProps & RefAttributes<Svg>>;

export default MailboxFlagBare;
export { MailboxFlagBare };
