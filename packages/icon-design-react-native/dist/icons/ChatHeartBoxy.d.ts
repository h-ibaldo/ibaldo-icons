import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatHeartBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatHeartBoxy: ForwardRefExoticComponent<ChatHeartBoxyProps & RefAttributes<Svg>>;

export default ChatHeartBoxy;
export { ChatHeartBoxy };
