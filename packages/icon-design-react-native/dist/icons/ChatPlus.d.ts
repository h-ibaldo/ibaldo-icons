import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatPlus: ForwardRefExoticComponent<ChatPlusProps & RefAttributes<Svg>>;

export default ChatPlus;
export { ChatPlus };
