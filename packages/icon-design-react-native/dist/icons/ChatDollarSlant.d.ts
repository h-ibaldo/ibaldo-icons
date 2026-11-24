import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDollarSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDollarSlant: ForwardRefExoticComponent<ChatDollarSlantProps & RefAttributes<Svg>>;

export default ChatDollarSlant;
export { ChatDollarSlant };
