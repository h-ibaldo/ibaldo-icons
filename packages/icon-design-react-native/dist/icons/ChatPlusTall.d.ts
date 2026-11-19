import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatPlusTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatPlusTall: ForwardRefExoticComponent<ChatPlusTallProps & RefAttributes<Svg>>;

export default ChatPlusTall;
export { ChatPlusTall };
