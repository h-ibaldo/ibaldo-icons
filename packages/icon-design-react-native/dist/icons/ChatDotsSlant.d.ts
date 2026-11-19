import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsSlant: ForwardRefExoticComponent<ChatDotsSlantProps & RefAttributes<Svg>>;

export default ChatDotsSlant;
export { ChatDotsSlant };
