import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatPlusCornerSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatPlusCornerSlant: ForwardRefExoticComponent<ChatPlusCornerSlantProps & RefAttributes<Svg>>;

export default ChatPlusCornerSlant;
export { ChatPlusCornerSlant };
