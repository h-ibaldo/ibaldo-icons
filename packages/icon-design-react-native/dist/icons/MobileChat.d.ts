import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MobileChatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MobileChat: ForwardRefExoticComponent<MobileChatProps & RefAttributes<Svg>>;

export default MobileChat;
export { MobileChat };
