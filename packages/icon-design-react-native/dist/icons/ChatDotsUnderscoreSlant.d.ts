import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatDotsUnderscoreSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatDotsUnderscoreSlant: ForwardRefExoticComponent<ChatDotsUnderscoreSlantProps & RefAttributes<Svg>>;

export default ChatDotsUnderscoreSlant;
export { ChatDotsUnderscoreSlant };
