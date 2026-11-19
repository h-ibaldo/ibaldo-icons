import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLettersSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLettersSlant: ForwardRefExoticComponent<ChatLettersSlantProps & RefAttributes<Svg>>;

export default ChatLettersSlant;
export { ChatLettersSlant };
