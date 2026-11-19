import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatHappyBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatHappyBoxy: ForwardRefExoticComponent<ChatHappyBoxyProps & RefAttributes<Svg>>;

export default ChatHappyBoxy;
export { ChatHappyBoxy };
