import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatHashBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatHashBroken: ForwardRefExoticComponent<ChatHashBrokenProps & RefAttributes<Svg>>;

export default ChatHashBroken;
export { ChatHashBroken };
