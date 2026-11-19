import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailboxPostProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailboxPost: ForwardRefExoticComponent<MailboxPostProps & RefAttributes<Svg>>;

export default MailboxPost;
export { MailboxPost };
