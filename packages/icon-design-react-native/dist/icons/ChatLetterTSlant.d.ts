import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLetterTSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLetterTSlant: ForwardRefExoticComponent<ChatLetterTSlantProps & RefAttributes<Svg>>;

export default ChatLetterTSlant;
export { ChatLetterTSlant };
