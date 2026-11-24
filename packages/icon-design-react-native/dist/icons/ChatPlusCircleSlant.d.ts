import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatPlusCircleSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatPlusCircleSlant: ForwardRefExoticComponent<ChatPlusCircleSlantProps & RefAttributes<Svg>>;

export default ChatPlusCircleSlant;
export { ChatPlusCircleSlant };
