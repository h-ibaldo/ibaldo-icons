import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneChatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneChat: ForwardRefExoticComponent<PhoneChatProps & RefAttributes<Svg>>;

export default PhoneChat;
export { PhoneChat };
