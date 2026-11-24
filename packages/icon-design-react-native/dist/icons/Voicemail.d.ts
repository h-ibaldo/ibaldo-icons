import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VoicemailProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Voicemail: ForwardRefExoticComponent<VoicemailProps & RefAttributes<Svg>>;

export default Voicemail;
export { Voicemail };
