import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackDots: ForwardRefExoticComponent<ChatStackDotsProps & RefAttributes<Svg>>;

export default ChatStackDots;
export { ChatStackDots };
