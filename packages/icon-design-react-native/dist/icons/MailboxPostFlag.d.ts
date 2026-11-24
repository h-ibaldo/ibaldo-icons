import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailboxPostFlagProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailboxPostFlag: ForwardRefExoticComponent<MailboxPostFlagProps & RefAttributes<Svg>>;

export default MailboxPostFlag;
export { MailboxPostFlag };
