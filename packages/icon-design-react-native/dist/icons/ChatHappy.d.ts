import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatHappyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatHappy: ForwardRefExoticComponent<ChatHappyProps & RefAttributes<Svg>>;

export default ChatHappy;
export { ChatHappy };
