import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatThoughtProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatThought: ForwardRefExoticComponent<ChatThoughtProps & RefAttributes<Svg>>;

export default ChatThought;
export { ChatThought };
