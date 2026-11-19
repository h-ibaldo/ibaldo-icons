import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckSlant: ForwardRefExoticComponent<ChatCheckSlantProps & RefAttributes<Svg>>;

export default ChatCheckSlant;
export { ChatCheckSlant };
