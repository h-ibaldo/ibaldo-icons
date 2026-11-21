import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneVoicemailSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneVoicemailSharp: ForwardRefExoticComponent<PhoneVoicemailSharpProps & RefAttributes<Svg>>;

export default PhoneVoicemailSharp;
export { PhoneVoicemailSharp };
