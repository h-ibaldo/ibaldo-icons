import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MailVoicemailProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MailVoicemail: ForwardRefExoticComponent<MailVoicemailProps & RefAttributes<Svg>>;

export default MailVoicemail;
export { MailVoicemail };
