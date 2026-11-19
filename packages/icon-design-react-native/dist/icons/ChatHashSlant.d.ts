import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatHashSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatHashSlant: ForwardRefExoticComponent<ChatHashSlantProps & RefAttributes<Svg>>;

export default ChatHashSlant;
export { ChatHashSlant };
