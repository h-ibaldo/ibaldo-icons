import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatInfoSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatInfoSlant: ForwardRefExoticComponent<ChatInfoSlantProps & RefAttributes<Svg>>;

export default ChatInfoSlant;
export { ChatInfoSlant };
