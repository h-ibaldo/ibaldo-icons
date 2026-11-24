import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatHashBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatHashBoxy: ForwardRefExoticComponent<ChatHashBoxyProps & RefAttributes<Svg>>;

export default ChatHashBoxy;
export { ChatHashBoxy };
