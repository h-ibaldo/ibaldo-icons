import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackHeartProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackHeart: ForwardRefExoticComponent<ChatStackHeartProps & RefAttributes<Svg>>;

export default ChatStackHeart;
export { ChatStackHeart };
