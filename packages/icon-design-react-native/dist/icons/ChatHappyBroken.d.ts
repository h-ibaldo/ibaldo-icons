import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatHappyBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatHappyBroken: ForwardRefExoticComponent<ChatHappyBrokenProps & RefAttributes<Svg>>;

export default ChatHappyBroken;
export { ChatHappyBroken };
