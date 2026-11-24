import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailboxFlagWavingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailboxFlagWaving: ForwardRefExoticComponent<MailboxFlagWavingProps & RefAttributes<Svg>>;

export default MailboxFlagWaving;
export { MailboxFlagWaving };
