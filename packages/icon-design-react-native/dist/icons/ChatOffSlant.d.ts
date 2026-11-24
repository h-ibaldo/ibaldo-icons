import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatOffSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatOffSlant: ForwardRefExoticComponent<ChatOffSlantProps & RefAttributes<Svg>>;

export default ChatOffSlant;
export { ChatOffSlant };
