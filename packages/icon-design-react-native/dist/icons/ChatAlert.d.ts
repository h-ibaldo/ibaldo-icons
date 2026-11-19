import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatAlertProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatAlert: ForwardRefExoticComponent<ChatAlertProps & RefAttributes<Svg>>;

export default ChatAlert;
export { ChatAlert };
