import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDotsSlant: ForwardRefExoticComponent<ChatStackDotsSlantProps & RefAttributes<Svg>>;

export default ChatStackDotsSlant;
export { ChatStackDotsSlant };
