import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDots: ForwardRefExoticComponent<ChatDotsProps & RefAttributes<Svg>>;

export default ChatDots;
export { ChatDots };
