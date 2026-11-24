import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatPlusCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatPlusCorner: ForwardRefExoticComponent<ChatPlusCornerProps & RefAttributes<Svg>>;

export default ChatPlusCorner;
export { ChatPlusCorner };
