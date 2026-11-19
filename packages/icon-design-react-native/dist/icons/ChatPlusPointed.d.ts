import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatPlusPointedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatPlusPointed: ForwardRefExoticComponent<ChatPlusPointedProps & RefAttributes<Svg>>;

export default ChatPlusPointed;
export { ChatPlusPointed };
