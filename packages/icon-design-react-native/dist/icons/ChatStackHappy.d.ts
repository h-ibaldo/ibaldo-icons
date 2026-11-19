import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackHappyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackHappy: ForwardRefExoticComponent<ChatStackHappyProps & RefAttributes<Svg>>;

export default ChatStackHappy;
export { ChatStackHappy };
