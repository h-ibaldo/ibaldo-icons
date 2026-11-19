import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTextPointedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTextPointed: ForwardRefExoticComponent<ChatTextPointedProps & RefAttributes<Svg>>;

export default ChatTextPointed;
export { ChatTextPointed };
