import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatHeartSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatHeartSlant: ForwardRefExoticComponent<ChatHeartSlantProps & RefAttributes<Svg>>;

export default ChatHeartSlant;
export { ChatHeartSlant };
