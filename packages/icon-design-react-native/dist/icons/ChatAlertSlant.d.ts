import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatAlertSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatAlertSlant: ForwardRefExoticComponent<ChatAlertSlantProps & RefAttributes<Svg>>;

export default ChatAlertSlant;
export { ChatAlertSlant };
