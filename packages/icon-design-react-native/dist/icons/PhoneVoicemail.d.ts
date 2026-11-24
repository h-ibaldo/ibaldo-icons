import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneVoicemailProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneVoicemail: ForwardRefExoticComponent<PhoneVoicemailProps & RefAttributes<Svg>>;

export default PhoneVoicemail;
export { PhoneVoicemail };
