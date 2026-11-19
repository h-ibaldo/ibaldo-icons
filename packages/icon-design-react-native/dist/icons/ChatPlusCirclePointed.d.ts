import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatPlusCirclePointedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatPlusCirclePointed: ForwardRefExoticComponent<ChatPlusCirclePointedProps & RefAttributes<Svg>>;

export default ChatPlusCirclePointed;
export { ChatPlusCirclePointed };
