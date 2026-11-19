import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatInfoProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatInfo: ForwardRefExoticComponent<ChatInfoProps & RefAttributes<Svg>>;

export default ChatInfo;
export { ChatInfo };
