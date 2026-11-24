import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailboxFlagSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailboxFlagSquare: ForwardRefExoticComponent<MailboxFlagSquareProps & RefAttributes<Svg>>;

export default MailboxFlagSquare;
export { MailboxFlagSquare };
