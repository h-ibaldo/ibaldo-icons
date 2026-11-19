import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsVerticalPointedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsVerticalPointed: ForwardRefExoticComponent<ChatDotsVerticalPointedProps & RefAttributes<Svg>>;

export default ChatDotsVerticalPointed;
export { ChatDotsVerticalPointed };
