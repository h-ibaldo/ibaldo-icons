import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatPlusCircleBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatPlusCircleBroken: ForwardRefExoticComponent<ChatPlusCircleBrokenProps & RefAttributes<Svg>>;

export default ChatPlusCircleBroken;
export { ChatPlusCircleBroken };
