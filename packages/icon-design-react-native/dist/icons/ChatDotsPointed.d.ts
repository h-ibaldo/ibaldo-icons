import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsPointedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsPointed: ForwardRefExoticComponent<ChatDotsPointedProps & RefAttributes<Svg>>;

export default ChatDotsPointed;
export { ChatDotsPointed };
