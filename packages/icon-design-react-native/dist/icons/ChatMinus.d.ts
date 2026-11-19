import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatMinus: ForwardRefExoticComponent<ChatMinusProps & RefAttributes<Svg>>;

export default ChatMinus;
export { ChatMinus };
