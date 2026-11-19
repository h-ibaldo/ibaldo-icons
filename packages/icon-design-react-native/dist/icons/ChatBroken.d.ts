import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatBroken: ForwardRefExoticComponent<ChatBrokenProps & RefAttributes<Svg>>;

export default ChatBroken;
export { ChatBroken };
