import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatAlertBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatAlertBoxy: ForwardRefExoticComponent<ChatAlertBoxyProps & RefAttributes<Svg>>;

export default ChatAlertBoxy;
export { ChatAlertBoxy };
