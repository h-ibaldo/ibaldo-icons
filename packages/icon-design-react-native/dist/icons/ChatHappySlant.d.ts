import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatHappySlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatHappySlant: ForwardRefExoticComponent<ChatHappySlantProps & RefAttributes<Svg>>;

export default ChatHappySlant;
export { ChatHappySlant };
