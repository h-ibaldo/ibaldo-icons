import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatAlertSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatAlertSharp: ForwardRefExoticComponent<ChatAlertSharpProps & RefAttributes<Svg>>;

export default ChatAlertSharp;
export { ChatAlertSharp };
