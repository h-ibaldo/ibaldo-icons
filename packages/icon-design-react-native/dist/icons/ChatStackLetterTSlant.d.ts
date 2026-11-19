import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackLetterTSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackLetterTSlant: ForwardRefExoticComponent<ChatStackLetterTSlantProps & RefAttributes<Svg>>;

export default ChatStackLetterTSlant;
export { ChatStackLetterTSlant };
