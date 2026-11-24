import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackAlertProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackAlert: ForwardRefExoticComponent<ChatStackAlertProps & RefAttributes<Svg>>;

export default ChatStackAlert;
export { ChatStackAlert };
